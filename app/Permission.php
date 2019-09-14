<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends \Spatie\Permission\Models\Permission
{
    public static function defaultPermissions()
    {
        return [
            'view_users',
            'add_users',
            'edit_users',
            'delete_users',

            'view_roles',
            'add_roles',
            'edit_roles',
            'delete_roles',

            'view_news',
            'add_news',
            'edit_news',
            'delete_news',

            'view_events',
            'add_events',
            'edit_events',
            'delete_events',

            'view_pages',
            'add_pages',
            'edit_pages',
            'delete_pages',

            'view_sliders',
            'add_sliders',
            'edit_sliders',
            'delete_sliders',

            'view_stories',
            'add_stories',
            'edit_stories',
            'delete_stories',

        ];
    }
}
