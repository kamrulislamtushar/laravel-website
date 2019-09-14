@extends('layouts.theme')
@section('title')
    Programs
@endsection
@section('content')

    <div class="content-wrapper">

        <!--begin upcoming event-->
        @if(isset($latestEvent))
        <div class="program-upcoming-event">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="area-img">
                            <img class="img-responsive animate zoomIn" src="{{asset('/storage/'.$latestEvent->banner)}}" alt="">
                            <div id="time-event" class="animated fadeIn"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div class="area-content">
                            <div class="area-top">
                                <div class="top-section animated lightSpeedIn">
                                    <h5 class="heading-light">UPCOMING EVENT</h5>
                                    <span class="dates text-white text-uppercase">{{ Carbon\Carbon::parse($latestEvent->date)->format('d-M-Y') }}</span>
                                </div>
                                <h2 class="heading-bold animated rollIn">{{$latestEvent->title}}</h2>
                                <span class="animated fadeIn">
                                <span class="icon map-icon"></span>
                                <span class="text-place text-white">{{$latestEvent->address}}</span>
                            </span>
                            </div>
                            <div class="area-bottom animated zoomInLeft">
                                <a href="{{route('event-details', $latestEvent->slug)}}" class="bnt bnt-theme join-now">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endif
        <!--end upcoming event-->

        <!--begin event calendar-->
        <div class="event-calendar">
            <div class="container">
                <div class="top-section text-center section-border-bottom">
                    <h4>All UIU CSE Alumni Events</h4>
                </div>
                @foreach($allEvents as $event)
                <div class="event-list-content">
                    <div class="event-list-item">
                        <div class="date-item">
                            <span class="day text-bold color-theme">{{ date('d', strtotime($event->date)) }}</span>
                            <span class="dates text-gray text-uppercase">{{ date('M', strtotime($event->date)) }}</span>
                            <span class="dates text-gray text-uppercase">{{ date('y', strtotime($event->date)) }}</span>
                        </div>
                        <div class="date-desc-wrapper">
                            <div class="date-desc">
                                <div class="date-title"><h4 class="heading-regular"><a href="{{route('event-details', $event->slug)}}">{{$event->title}}</a></h4></div>
                                <div class="date-excerpt">
                                    <p>{!!  $event->teaser !!}</p>
                                </div>
                                <div class="place">
                                    <span class="icon map-icon"></span>
                                    <span class="text-place">{{$event->address}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="date-links register text-center">
                            <a href="{{route('event-details', $event->slug)}}" class="text-regular">DETAILS</a>
                        </div>
                    </div>
                </div>
                    @endforeach
            </div>
        </div>
        <!--end event calendar-->

    </div>
    <!--End content wrapper-->

@endsection
