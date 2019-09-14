@extends('layouts.theme')

@section('title')

    {{ $event->title }}

@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            @include('shared.app.sidebar')
        </div>
        <div class="col-md-9">
            <!-- page title -->
            <div class="panel_title">
                <h4 class="pull-left">{{ $event->title }}</h4>
                <div class="btn-group  pull-right text-right">
                    <a href="{{ route('events.index') }}" class="btn btn-default">
                    <i class="fa fa-angle-left"></i> Back</a>
                    <a href="{{ route('events.edit', $event) }}" class="btn btn-primary">
                    <i class="fa fa-edit"></i> Edit</a>
                </div>
            </div>
            <!-- page content -->
            <div class="content">
                @if($event->banner)
                    <img src="{{ asset('/storage/'.$event->banner) }}" class="img-responsive" alt="{{ $event->title }}">
                    <hr>
                @endif
                <div class="row">
                    <div class="col-sm-3">
                        <b>Date: </b>
                        <span>{{$event->date}}</span>
                    </div>
                    <div class="col-sm-3">
                        <b>Fee: </b>
                        <span>{{$event->fair}}</span>
                    </div>
                    <div class="col-sm-3">
                        <b>Organizer: </b>
                        <span>{{$event->organizer}}</span>
                    </div>
                    <div class="col-sm-3">
                        <b>Available Seats: </b>
                        <span>{{$event->seats}}</span>
                    </div><hr>

                    <div class="col-sm-12">
                        <b>Event Description:</b>
                        <span>{!! $event->content  !!} </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection