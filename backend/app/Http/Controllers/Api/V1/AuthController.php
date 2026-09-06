<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $data = $request->validated();
        $user = User::create($data);
        Profile::create(['user_id' => $user->id]);

        $student = Role::query()->where('name', 'student')->first();
        if ($student) {
            $user->roles()->syncWithoutDetaching([$student->id]);
        }

        $token = $user->createToken('edupath-web')->plainTextToken;
        return response()->json(['success' => true, 'data' => ['user' => $user->load('roles', 'profile'), 'token' => $token]], 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $key = 'login:' . Str::lower($request->string('email')) . '|' . $request->ip();
        if (RateLimiter::tooManyAttempts($key, 5)) {
            return response()->json(['success' => false, 'message' => 'Too many login attempts. Try again later.'], 429);
        }

        $user = User::query()->where('email', $request->string('email'))->first();
        if (!$user || !$user->is_active || !Hash::check($request->string('password'), $user->password)) {
            RateLimiter::hit($key, 60);
            return response()->json(['success' => false, 'message' => 'Invalid credentials.'], 422);
        }

        RateLimiter::clear($key);
        $user->tokens()->delete();
        $token = $user->createToken('edupath-web')->plainTextToken;

        return response()->json(['success' => true, 'data' => ['user' => $user->load('roles', 'profile'), 'token' => $token]]);
    }

    public function me(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => ['user' => request()->user()->load('roles', 'profile')]]);
    }

    public function logout(): JsonResponse
    {
        request()->user()->currentAccessToken()?->delete();
        return response()->json(['success' => true, 'message' => 'Logged out successfully.']);
    }
}
