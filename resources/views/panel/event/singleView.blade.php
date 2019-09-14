@extends('layouts.theme')

@section('title')

    {{ $event->title }}

@endsection

@section('og-tags')
    <meta property="og:url"                content="{{route('news-details', $event->slug)}}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="{{$event->title}}" />
    <meta property="og:description"        content="{{ $event->teaser }}" />


@section('content')
    <!--Begin content wrapper-->
    <div class="content-wrapper">
        <!--begin event-->
        <div class="event">
          
          <div class="container image-align-webkit">
             <img class="img-responsive" src="{{ asset('/storage/'.$event->banner) }}" alt="{{ $event->title }}">
         </div>
           
            <div class="event-content">
                <div class="container">
                    <div class="event-detail text-center">
                        <div class="dates"> <p class="text-light">{{ \Carbon\Carbon::parse($event->date)->format('d-M-Y') }}</p></div>
                        <div class="event-detail-title">
                            <h1 class="heading-bold">{{ $event->title }}</h1>
                        </div>
                        <div class="place">
                            <span class="icon icon-map"></span>
                            <h4>{{$event->address}}</h4>
                        </div>

                        <div class="row">
                            <div class="col-sm-4">
                            <h4>Total Seats: {{$event->seats}}</h4>

                            </div>
                            <div class="col-sm-4">
                                <h4>Reg Fees: {{$event->fair}} </h4>

                            </div>
                            <div class="col-sm-4">
                                <h4>Organizer: {{$event->organizer}}</h4>

                            </div>
                        </div>

                    </div>
                    <div class="event-descriptiion">
                    <p>{!! $event->content  !!}</p>
                    </div>

                </div>
            </div>
        </div>
        <!--end event-->
@endsection
