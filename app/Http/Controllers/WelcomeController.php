<?php

namespace App\Http\Controllers;
use App\Model\Event;
use App\Model\News;
use Carbon\Carbon;
use App\Model\Story;
use App\Model\Slider;

class WelcomeController extends Controller
{
    public function index()
    {

        $event = Event::where('status', 1)->orderBy('date','desc')->first();
        $allEvents = Event::all();
        $allNews = News::orderBy('created_at','desc')->limit(4)->get();
        $story = Story::orderBy('created_at','desc')->get()->first();
        $sliders= Slider::orderBy('created_at','desc')->limit(3)->get();
        return view('welcome',compact('allNews','event', 'allEvents', 'story', 'sliders'));
    }
}
