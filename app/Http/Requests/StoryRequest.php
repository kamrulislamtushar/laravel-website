<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user() && $this->user()->hasAnyPermission(['edit_stories', 'add_stories','delete_stories']);
    }
    
    public function rules()
    {
        return [
            'title' => 'required|max:250',
            'name' => 'required|max:250',
            'image' => 'nullable|image',
            'content' => 'nullable'
        ];
    }
}
