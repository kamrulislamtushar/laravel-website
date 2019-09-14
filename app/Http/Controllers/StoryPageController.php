<?php

namespace App\Http\Controllers;

use App\Model\Story;
use Illuminate\Http\Request;
use App\Http\Requests\StoryRequest;
use Illuminate\Support\Facades\Storage;
class StoryPageController extends Controller
{
    public function index()
    {
        $stories = Story::orderBy('created_at','desc')->get();
        $featuredStory = $stories->first();
        return view('story',compact('stories','featuredStory'));
    }
    
    public function show($slug)
    {
        $story = Story::where('slug', $slug)->firstOrFail();
        
        return view('panel.story.details', compact('story'));
    }


}
