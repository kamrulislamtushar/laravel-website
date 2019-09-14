<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewsRequest;
use App\Model\News;
use Illuminate\Support\Facades\Storage;
use App\Authorizable;

class NewsController extends Controller
{
    use Authorizable;

    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->paginate(20);
        return view('panel.news.adminControl.index', compact('news'));
    }



    public function create()
    {
        return view('panel.news.adminControl.create');
    }


    public function store(NewsRequest $request)
    {
        News::create([
            'title' => $request->title,
            'image' => $request->hasFile('image')?Storage::disk('public')->put('news', $request->file('image')):null,
            'content' => $request->$request->content,
            'teaser' => $request->teaser,
        ]);

        return redirect()->route('news.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        return view('panel.news.adminControl.view', compact('news'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        return view('panel.news.adminControl.edit', compact('news'));
    }


    public function update(NewsRequest $request, News $news)
    {
        $image = $news->image;
        $newImage = '';
        if ($request->hasFile('image')) {
            $newImage = Storage::disk('public')->put('news', $request->file('image'));
            if ($image) Storage::disk('public')->delete($image);
        }
        $news->update($request->except('image') + [
            'image' => $request->hasFile('image') ? $newImage : $image
        ]);

        session()->flash('success','News update successfully');
        return redirect()->route('news.index');
    }


    public function destroy(News $news)
    {
        if ($news->image) Storage::disk('public')->delete($news->image);
        $news->delete();
        session()->flash('success','News delete successfully');
        return redirect()->route('news.index');
    }


    public function view($slug)
    {
        $news = News::where('slug', $slug)->firstOrFail();
        $latestNews = News::orderBy('created_at','desc')->take(10)->get();
        return view('panel.news.details', compact('latestNews','news'));
    }
}
