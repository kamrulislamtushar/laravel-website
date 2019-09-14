@extends('layouts.theme')

@section('title')
    {{ $page->title }}
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
                    <h4 class="pull-left">{{ $page->title }}</h4>
                    <div class="btn-group  pull-right text-right">
                        <a href="{{ route('pages.index') }}" class="btn btn-default">
                            <i class="fa fa-angle-left"></i> Back</a>
                        <a href="{{ route('pages.edit', $page) }}" class="btn btn-primary">
                            <i class="fa fa-edit"></i> Edit</a>
                        <a href="{{ route('pages.destroy', $page) }}" class="btn btn-danger">
                            <i class="fa fa-trash"></i> Delete</a>
                    </div>
                </div>

                <!-- page content -->
                <div class="content">
                    @if($page->featured_image)
                        <img src="{{ asset('/storage/'.$page->featured_image) }}" class="img-responsive" alt="{{ $page->featured_image }}">
                        <hr>
                    @endif
                    <div class="row">

                        <div class="col-sm-4">
                            <b>Slug: </b>
                            <span>{{$page->slug}}</span>
                        </div>
                    </div><hr>
                    <p>{!! $page->content !!}</p>
                </div>
            </div>
        </div>
    </div>
@endsection