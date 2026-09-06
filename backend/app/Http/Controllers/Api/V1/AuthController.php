<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AuthController
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = DB::transaction(function () use ($request): User {
            $user = User::create([
                'public_id' => (string) Str::uuid(),
                'name' => $request->string('name')->toString(),
                'email' => mb_strtolower($request->string('email')->toString()),
                'password' => $request->string('password')->toString(),
                'phone' => $request->input('phone'),
                'is_active' => true,
            ]);

            $user->profile()->create([
                'country_code' => $request->input('country_code'),
            ]);

            $studentRole = Role::query()->where('name', 'student')->first();
            if ($studentRole) {
                $user->roles()->attach($studentRole->id);
            }

            return $user->fresh(['roles', 'profile']);
        });

        $token = $user->createToken('edupath-web')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Registration successful.',
            'data' => ['user' => $user, 'token' => $token],
        ], 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $user = User::query()->with(['roles', 'profile'])
            ->where('email', mb_strtolower($request->string('email')->toString()))
            ->first();

        if (!$user || !$user->is_active || !password_verify($request->string('password')->toString(), $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials.',
            ], 401);
        }

        $user->tokens()->where('name', 'edupath-web')->delete();
        $token = $user->createToken('edupath-web')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login successful.',
            'data' => ['user' => $user, 'token' => $token],
        ]);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => ['user' => $request->user()->load(['roles', 'profile'])],
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()?->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully.',
        ]);
    }
}
