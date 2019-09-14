<?php

namespace App\Http\Controllers;
use App\Authorizable;
use App\Model\Event;
use Illuminate\Http\Request;
use App\Http\Requests\EventRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class EventsController extends Controller
{

    //  use authorizable;

    public function index()
    {

        $events = Event::orderBy('created_at','desc')->paginate(20);
        return view('panel.event.adminControl.index', compact('events'));
    }

    public function create()
    {
        return view('panel.event.adminControl.create');
    }


    public function store(EventRequest $request)
    {
        $banner =$request->hasFile('banner') ? Storage::disk('public')->put('events', $request->file('banner')):null;
        Event::create($request->except('banner') + [
            'banner' => $banner
        ]);
        session()->flash('success', 'Event store successfully');
        return redirect()->route('events.index');
    }

    public function show(Event $event)
    {
        return view('panel.event.adminControl.show', compact('event'));
    }

    public function edit(Event $event)
    {
        return view('panel.event.adminControl.edit', compact('event'));
    }
    public function view($slug)
    {
        $event = Event::where('slug', $slug)->firstOrFail();
        return view('panel.event.singleView', compact('event'));
    }

    public function update(EventRequest $request, Event $event)
    {
        $banner = $event->banner;
        $newBanner = '';
        if ($request->hasFile('banner')) {
            $newBanner = Storage::disk('public')->put('events', $request->file('banner'));
            if ($banner) Storage::disk('public')->delete($banner);
        }
        $event->update($request->except('banner') + [
            'banner' => $request->hasFile('banner') ? $newBanner : $banner
        ]);

        session()->flash('success','Event update successfully');
        return redirect()->route('events.index');

    }

    public function destroy(Event $event)
    {
        if ($event->banner)
            Storage::disk('public')->delete($event->banner);
        $event->delete();

        session()->flash('success','Event delete successfuly');
        return redirect()->route('events.index');
    }
}
