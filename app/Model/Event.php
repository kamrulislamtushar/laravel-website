<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'title', 'address', 'date', 'content', 'fair',
        'seats', 'banner','organizer', 'slug', 'teaser'
    ];
    
    public static function boot()
    {
        parent::boot();
        
        static::saving(function ($model) {
            $model->slug = str_slug($model->title);
        });
    }
}
