<?php

namespace App\Http\Controllers;

use App\Authorizable;
use App\Model\Story;
use Illuminate\Http\Request;
use App\Http\Requests\StoryRequest;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File;
class StoryController extends Controller
{
//    use  Authorizable;
    
    public function index()
    {
        $stories = Story::orderBy('created_at', 'desc')->paginate(20);
        return view('panel.story.adminControl.index', compact('stories'));
    }

    public function create()
    {
        return view('panel.story.adminControl.create');
    }

    public function store(StoryRequest $request)
    {
        $image =$request->hasFile('image') ? Storage::disk('public')->put('stories', $request->file('image')):null;
        Story::create($request->except('image') + [
                'image' => $image
            ]);

        session()->flash('success', 'Story stored successfully');
        return redirect()->route('stories.index');
    }

    public function show(Story $story)
    {
        return view('panel.story.adminControl.show', compact('story'));
    }

    public function edit(Story $story)
    {
        return view('panel.story.adminControl.edit', compact('story'));
    }

    public function update(StoryRequest $request, Story $story)
    {

        $image = $story->image;
        $newImage = '';
        if ($request->hasFile('image'))
        {
            $newImage = Storage::disk('public')->put('stories', $request->file('image'));
            if ($image) Storage::disk('public')->delete($image);
        }
        $story->update($request->except('image') + [
                'image' => $request->hasFile('image') ? $newImage : $image
            ]);

        session()->flash('success','Story updated successfully');
        return redirect()->route('stories.index');
    }

    public function destroy(Story $story)
    {
        if ($story->image) Storage::disk('public')->delete($story->image);
        $story->delete();
        session()->flash('success','Story deleted successfully');
        return redirect()->route('stories.index');
    }
}
