@extends('layouts.theme')
@section('title')
    {{$news->title}}
@endsection


@section('og-tags')
    <meta property="og:url"                content="{{route('news-details', $news->slug)}}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="{{$news->title}}" />
    <meta property="og:description"        content="{{ $news->teaser }}" />
    <meta property="og:image"              content="{{asset('/storage/'.$news->image)}}" />
@endsection


@section('content')
    <div class="content-wrapper">
        <div class="blog-content">
            <div class="container">
                <div class="row">
                    <!--Col Main-->
                    <div class="col-main col-lg-8 col-md-7 col-xs-12">
                        <div class="blog-post-content">
                            <!--Blog Post-->
                            <div class="blog-post">
                                <div class="area-img">
                                    <img class="img-responsive" src="{{asset('/storage/'.$news->image)}}" alt="">
                                </div>
                                <div class="area-content">
                                    <h3 class="text-regular text-uppercase">{{$news->title}}</h3>
                                    <div class="stats">
                                        <span class="clock">
                                            <span class="icon clock-icon"></span>
                                            <span class="text-center text-light">{{ Carbon\Carbon::parse($news->created_at)->format('d-M-Y') }}</span>
                                        </span>
                                    </div>
                                    <div class="desc">
                                    <p>
                                        {!! $news->content !!}
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <!--Share-->
                            {{--<div class="share">--}}
                                {{--<div class="box-share">--}}
                                    {{--<h4>SHARE THIS STORY</h4>--}}
                                    {{--<ul>--}}
                                        {{--<li class="facebook"><a href="#"><span class="hidden">facebook</span></a></li>--}}
                                        {{--<li class="twitter"><a href="#"><span class="hidden">twitter</span></a></li>--}}
                                        {{--<li class="google"><a href="#"><span class="hidden">google</span></a></li>--}}

                                    {{--</ul>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                        </div>
                    </div>
                    <!--Sidrbar Right-->
                    <div class="sidebar blog-right col-lg-4 col-md-5 hidden-sm hidden-xs">
                        <div class="block-sidebar">
                            <div class="block-item popular-post">
                                <div class="block-title">
                                    <h5 class="text-regular text-uppercase">POPULAR POST</h5>
                                </div>

                                @foreach($latestNews as $latest)
                                <div class="block-content">
                                    <ul>
                                        <li>
                                            <div class="area-img">
                                                <img src="{{asset('/storage/'.$latest->image)}}" alt="">
                                            </div>
                                            <div class="area-content">
                                                <h6><a href="{{route('news-details', $latest->slug)}}">{{$latest->title}}</a></h6>
                                                <div class="stats">
                                                    <span class="clock">
                                                        <span class="icon clock-icon"></span>
                                                        <span class="text-center text-light">{{ Carbon\Carbon::parse($latest->created_at)->format('d-M-Y') }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End content wrapper-->


    @endsection
