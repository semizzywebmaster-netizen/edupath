<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Artisan;

Artisan::command('edupath:about', function (): void {
    $this->info('EDUPATH Laravel backend');
})->purpose('Display EDUPATH backend information');
