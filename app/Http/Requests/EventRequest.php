<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user() && $this->user()->hasAnyPermission(['edit_events', 'add_events','delete_events']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $roles = [
            'title' => 'required|max:250',
            'address' => 'nullable|max:250',
            'date' => 'required|max:250',
            'content' => 'nullable',
            'organizer' => 'nullable|max:250',
            'fair' => 'required',
            'banner' => 'nullable|image',
            'seats' => 'required|max:250',
            'status' => 'required',
            'teaser' => 'nullable',
            'slug' => 'required'
        ];
        if ($this->fair == 1) {
            $roles['fee'] = 'required|max:250';
            $this->merge(['fair' => $this->fee]);
        }
        return $roles;
    }
}
