<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('institutions', function (Blueprint $table): void {
            $table->id();
            $table->uuid('public_id')->unique();
            $table->string('name', 200);
            $table->string('type', 80)->nullable();
            $table->string('country_code', 2)->nullable();
            $table->string('state', 120)->nullable();
            $table->string('city', 120)->nullable();
            $table->string('status', 30)->default('active');
            $table->timestamps();
            $table->softDeletes();
            $table->index(['country_code', 'state']);
        });

        Schema::create('education_levels', function (Blueprint $table): void {
            $table->id();
            $table->string('name', 120)->unique();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('programmes', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('education_level_id')->constrained()->restrictOnDelete();
            $table->string('name', 180);
            $table->string('code', 50)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->unique(['education_level_id', 'name']);
        });

        Schema::create('class_levels', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('education_level_id')->constrained()->restrictOnDelete();
            $table->string('name', 120);
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->unique(['education_level_id', 'name']);
        });

        Schema::create('academic_sessions', function (Blueprint $table): void {
            $table->id();
            $table->string('name', 80)->unique();
            $table->date('starts_at')->nullable();
            $table->date('ends_at')->nullable();
            $table->boolean('is_current')->default(false);
            $table->timestamps();
            $table->index('is_current');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('academic_sessions');
        Schema::dropIfExists('class_levels');
        Schema::dropIfExists('programmes');
        Schema::dropIfExists('education_levels');
        Schema::dropIfExists('institutions');
    }
};
