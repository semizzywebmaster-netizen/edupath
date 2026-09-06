<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['name' => 'student', 'display_name' => 'Student'],
            ['name' => 'teacher', 'display_name' => 'Teacher'],
            ['name' => 'parent', 'display_name' => 'Parent'],
            ['name' => 'school_admin', 'display_name' => 'School Administrator'],
            ['name' => 'content_manager', 'display_name' => 'Content Manager'],
            ['name' => 'finance_admin', 'display_name' => 'Finance Administrator'],
            ['name' => 'support_admin', 'display_name' => 'Support Administrator'],
            ['name' => 'super_admin', 'display_name' => 'Super Administrator'],
        ];

        foreach ($roles as $role) {
            DB::table('roles')->updateOrInsert(['name' => $role['name']], $role + ['created_at' => now(), 'updated_at' => now()]);
        }
    }
}
