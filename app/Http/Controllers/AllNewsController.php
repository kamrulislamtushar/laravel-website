<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\NewsRequest;
use App\Model\News;
use Illuminate\Support\Facades\Storage;

class AllNewsController extends Controller
{
    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->take(10)->get();
        $singleNews = $news->first();
        $latestNews = $news->take(3);
        return view('panel.news.news', compact('news','latestNews','singleNews'));
    }
}
