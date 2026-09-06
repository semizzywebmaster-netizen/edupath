<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::get('/', static function () {
    return response()->json([
        'success' => true,
        'service' => 'EDUPATH API',
        'status' => 'online',
    ]);
});
