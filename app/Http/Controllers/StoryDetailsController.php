<?php

namespace App\Http\Controllers;
use App\Model\Story;
use App\Http\Requests\StoryRequest;
use Illuminate\Http\Request;

class StoryDetailsController extends Controller
{
    public function details(Story $story)
    {
        $stories = Story::orderBy('created_at','desc')->get()->take(3);
        return view('panel.story.details', compact('story','stories'));
    }

}
