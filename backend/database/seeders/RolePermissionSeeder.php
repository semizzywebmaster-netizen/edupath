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

        $permissions = [
            ['name' => 'profile.read', 'display_name' => 'Read profile'],
            ['name' => 'profile.update', 'display_name' => 'Update profile'],
            ['name' => 'learning.access', 'display_name' => 'Access learning'],
            ['name' => 'teacher.manage', 'display_name' => 'Manage teaching resources'],
            ['name' => 'school.manage', 'display_name' => 'Manage school resources'],
            ['name' => 'content.manage', 'display_name' => 'Manage educational content'],
            ['name' => 'finance.manage', 'display_name' => 'Manage financial resources'],
            ['name' => 'support.manage', 'display_name' => 'Manage support operations'],
            ['name' => 'admin.manage', 'display_name' => 'Manage platform administration'],
        ];

        foreach ($roles as $role) {
            DB::table('roles')->updateOrInsert(
                ['name' => $role['name']],
                $role + ['created_at' => now(), 'updated_at' => now()]
            );
        }

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                $permission + ['created_at' => now(), 'updated_at' => now()]
            );
        }

        $roleIds = DB::table('roles')->pluck('id', 'name');
        $permissionIds = DB::table('permissions')->pluck('id', 'name');

        $rolePermissions = [
            'student' => ['profile.read', 'profile.update', 'learning.access'],
            'teacher' => ['profile.read', 'profile.update', 'learning.access', 'teacher.manage'],
            'parent' => ['profile.read', 'profile.update'],
            'school_admin' => ['profile.read', 'profile.update', 'school.manage'],
            'content_manager' => ['profile.read', 'content.manage'],
            'finance_admin' => ['profile.read', 'finance.manage'],
            'support_admin' => ['profile.read', 'support.manage'],
            'super_admin' => array_keys($permissionIds->toArray()),
        ];

        foreach ($rolePermissions as $roleName => $permissionNames) {
            foreach ($permissionNames as $permissionName) {
                if (!isset($roleIds[$roleName], $permissionIds[$permissionName])) {
                    continue;
                }

                DB::table('permission_role')->updateOrInsert([
                    'role_id' => $roleIds[$roleName],
                    'permission_id' => $permissionIds[$permissionName],
                ]);
            }
        }
    }
}
