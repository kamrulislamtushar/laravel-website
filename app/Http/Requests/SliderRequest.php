<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SliderRequest extends FormRequest
{

    public function authorize()
    {
        return $this->user() ? true: false;
    }


    public function rules()
    {
        return [
            'title' => 'nullable|max:250',
            'image' => 'required|image'
        ];
    }
}
