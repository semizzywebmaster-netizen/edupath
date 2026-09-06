<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Application bindings will be added as backend services are implemented.
    }

    public function boot(): void
    {
        // Production boot configuration will be added during hardening.
    }
}
