@extends('layouts.theme')
@section('title')
    {{$story->title}}
@endsection

@section('og-tags')
    <meta property="og:url"                content="{{route('news-details', $story->slug)}}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="{{$story->title}}" />
    <meta property="og:description"        content="{{ $story->teaser }}" />
    <meta property="og:image"              content="{{asset('/storage/'.$story->image)}}" />
@endsection


@section('content')

    <!--Begin content wrapper-->
    <div class="content-wrapper">
        <div class="story-single">
            <div class="cover-img">
                <div class="area-img">
                    <img class="img-responsive" src="{{asset('/storage/'.$story->image)}}" alt="">
                </div>
            </div>
            <div class="story-content mt-20">
                <div class="container">
                    <h1 class="heading-regular">{{$story->title}} - {{$story->name}}</h1>
                    <div class="desc">
                        <p>{!! $story->content !!}</p>
                    </div>
                    <div class="post-by">
                        <p class="text-gray">Posted On : {{ Carbon\Carbon::parse($story->created_at)->format('d-M-Y ') }}</p>
                    </div>
                </div>
            </div>
            {{--<div class="share">--}}
                {{--<div class="container">--}}
                    {{--<div class="box-share">--}}
                        {{--<h4>SHARE THIS STORY</h4>--}}
                        {{--<ul>--}}
                            {{--<li class="facebook"><a href="#"><span class="hidden">facebook</span></a></li>--}}
                            {{--<li class="twitter"><a href="#"><span class="hidden">twitter</span></a></li>--}}
                            {{--<li class="google"><a href="#"><span class="hidden">google</span></a></li>--}}

                        {{--</ul>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        </div>
    </div>

@endsection
