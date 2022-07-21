<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wall extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
    ];

    public function wall():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function posts():HasMany
    {
        return $this->hasMany(Post::class, 'wall_id');
    }
}
