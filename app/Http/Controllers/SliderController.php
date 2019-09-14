<?php

namespace App\Http\Controllers;

use App\Authorizable;
use Illuminate\Http\Request;
use App\Model\Slider;
use App\Http\Requests\SliderRequest;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    use Authorizable;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::orderBy('created_at','desc')->paginate(20);
        return view('panel.slider', compact('sliders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    public function store(SliderRequest $request)
    {
        Slider::create([
            'title' => $request->title,
            'image' => $request->hasFile('image')?Storage::disk('public')->put('sliders', $request->file('image')):null
        ]);
        session()->flash('success','Slider create successfully');
        return back();
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }

    public function update(SliderRequest $request, Slider $slider)
    {
        $image = $slider->image;
        $newImage = '';
        if ($request->hasFile('image')) {
            $newImage = Storage::disk('public')->put('sliders', $request->file('image'));
            if ($image) Storage::disk('public')->delete($image);
        }
        $slider->update($request->except('image') + [
            'image' => $request->hasFile('image') ? $newImage : $image
        ]);

        session()->flash('success','Slider update successfully');
        return redirect()->route('sliders.index');
    }


    public function destroy(Slider $slider)
    {
        if ($slider->image) Storage::disk('public')->delete($slider->image);
        $slider->delete();
        session()->flash('success','Slider delete successfully');
        return redirect()->route('sliders.index');
    }
}
