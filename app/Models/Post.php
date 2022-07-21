<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'author_id',
        'wall_id',
        'title',
        'text',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class,'author_id');
    }

    public function wall():BelongsTo
    {
        return $this->belongsTo(Wall::class, 'wall_id');
    }
}
