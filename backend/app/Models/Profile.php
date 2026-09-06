<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'avatar_path', 'country_code', 'state', 'date_of_birth', 'gender', 'bio', 'preferences',
    ];

    protected $casts = ['date_of_birth' => 'date', 'preferences' => 'array'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
