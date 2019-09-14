<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $info = [
            'name' => 'required',
            'student_id' => 'required',
            'semester' => 'required',
            'cgpa' => 'required',
            'email' => 'required',
            'mobile' => 'required',
            'expertise' => 'required',
            'cv' => 'required|mime:pdf,doc,docx'
            
        ];
        return $info;
    }
}
