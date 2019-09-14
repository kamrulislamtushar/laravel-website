<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title', 'image', 'content', 'slug', 'teaser'
    ];
    
    public static function boot()
    {
        parent::boot();
        
        static::saving(function ($model) {
            $model->slug = str_slug($model->title);
        });
    }
}
