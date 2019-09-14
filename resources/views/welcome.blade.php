@extends('layouts.theme')
@section('title')
Home 
@endsection
@section('content')
    <div class="content-wrapper">
        @include('home.slider')

        @include('home.events')

        {{--@include('home.board')--}}

        <div class="block-links">
            <div class="container">
                <div class="row">
                    <div class="block-news col-md-6 col-sm-12 col-xs-12">
                        @include('home.news')
                    </div>

                    <div class="block-event-calendar col-md-6 col-sm-12 col-xs-12">
                        @include('home.calendar')
                    </div>
                </div>
            </div>
        </div>

        {{--@include('home.small')--}}
    </div>
@endsection
