<?php

use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('/health', function () {
        return response()->json([
            'success' => true,
            'service' => 'EDUPATH API',
            'status' => 'healthy',
            'version' => 'v1',
        ]);
    });
});
