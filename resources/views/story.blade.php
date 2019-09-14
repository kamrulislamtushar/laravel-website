@extends('layouts.theme')

@section('title')
    Alumni Stories
@endsection

@section('content')


    <!--Begin content wrapper-->
    <div class="content-wrapper">
        <!--begin alumni interview-->
        @if(isset($featuredStory))
        <div class="alumni-interview" style="background:linear-gradient(to right, transparent, #0c0d10), url({{asset('/storage/'.$featuredStory->image)}}) center">

            <div class="container">
                <div class="row">

                    <div class="col-sm-6 col-xs-12 pull-right">
                        <div class="interview-wrapper">
                            <div class="interview-title animated lightSpeedIn">
                                <h4 class="heading-light text-capitalize">Alumni Interview</h4>
                                <h1 class="heading-light text-capitalize">{{$featuredStory->name}}</h1>
                            </div>
                            <div class="interview-desc text-left animated rollIn">
                                <p class="text-light">{{$featuredStory->title}}</p>
                            </div>
                            <div class="interview-see-story animated zoomInLeft">
                                <a class="see-story bnt text-uppercase" href="{{route('story-details', $featuredStory->slug)}}">SEE FULL STORY</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        @endif
        <!--end alumni interview-->

        <!--begin Alumni Story-->
        <div class="alumni-story">
            <div class="container">
                <div class="row">
                    @foreach($stories as $story)
                    <div class="col-sm-6 col-xs-8">
                        <div class="alumni-story-wrapper">
                            <div class="alumni-story-img">
                                <img class="img-responsive" src="{{asset('/storage/'.$story->image)}}" alt="">
                            </div>
                            <div class="alumni-story-content">
                                <h3 class="heading-regular"><a href="{{route('story-details',$story->slug)}}">{{$story->name}} : {{$story->title}}</a></h3>
                                <p class="text-light">{!! $story->teaser !!}</p>
                                <span class="dates text-light">{{ \Carbon\Carbon::parse($story->created_at)->format('d-M-Y')}}</span>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
        <!--end Alumni Story-->

    </div>
    <!--End content wrapper-->
@endsection
