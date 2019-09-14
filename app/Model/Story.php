<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;



class Story extends Model
{
    protected $fillable = [
        'title','name', 'image' ,'content', 'teaser'
    ];
    
    public static function boot()
    {
        parent::boot();
        
        static::saving(function ($model) {
            $model->slug = str_slug($model->title);
        });
    }
}
