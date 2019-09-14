<?php

namespace App\Http\Controllers;
use App\Authorizable;
use App\Model\Page;
use Illuminate\Http\Request;
use App\Http\Requests\PageRequest;
use Illuminate\Support\Facades\Storage;




class PagesController extends Controller
{
    use Authorizable;

    public function create()
    {
        return view('panel.page.create');
    }

    public function index()
    {
        $pages = Page::orderBy('created_at','desc')->paginate(20);
        return view('panel.page.index', compact('pages'));
    }

    public function store(PageRequest $request)
    {

        $featured_image = $request->hasFile('featured_image') ? Storage::disk('public')->put('pages', $request->file('featured_image')):null;
        Page::create($request->except('featured_image') + [
            'featured_image' => $featured_image
            ]);
        session()->flash('success', 'Page Created Successfully successfully');
        return redirect()->route('pages.index');

    }
    public function show(Page $page)
    {
        return view('panel.page.show', compact('page'));
    }

    public function edit(Page $page)
    {
        return view('panel.page.edit', compact('page'));
    }


    public function update(PageRequest $request, Page $page)
    {

        $featured_image = $page->featured_image;
        $newImage = '';
        if ($request->hasFile('featured_image')) {
            $newImage = Storage::disk('public')->put('pages', $request->file('featured_image'));
            if ($featured_image) Storage::disk('public')->delete($featured_image);
        }
        $page->update($request->except('featured_image') + [
                'featured_image' => $request->hasFile('$featured_image') ? $newImage : $featured_image
            ]);

        session()->flash('success','Page updated successfully');
        return redirect()->route('pages.index');
    }


    public function destroy(Page $page)
    {
        if ($page->featured_image)
            Storage::disk('public')->delete($page->featured_image);
        $page->delete();
        session()->flash('success','Page deleted successfully');
        return redirect()->route('pages.index');
    }

    public function careerFair()
    {
        return view('career-fair');
    }
}
