@extends('layouts.theme')

@section('title')

    {{ $story->title }}

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
                    <h4 class="pull-left">{{ $story->title }}</h4>
                    <div class="btn-group  pull-right text-right">
                        <a href="{{ route('stories.index') }}" class="btn btn-default">
                            <i class="fa fa-angle-left"></i> Back</a>
                        <a href="{{ route('stories.edit', $story) }}" class="btn btn-primary">
                            <i class="fa fa-edit"></i> Edit</a>
                        <a href="{{ route('stories.destroy', $story) }}" class="btn btn-danger">
                            <i class="fa fa-trash"></i> Delete</a>
                    </div>
                </div>
                <div class="content">
                    @if($story->image)
                        <img src="{{ asset('/storage/'.$story->image) }}" class="img-responsive" alt="{{ $story->title }}">
                        <hr>
                    @endif
                    <div class="row">
                        <div class="col-sm-3">
                            <b>Title: </b>
                            <span>{{$story->Title}}</span>
                        </div>
                        <div class="col-sm-3">
                            <b>Alumni Name:  </b>
                            <span>{{$story->name}}</span>
                        </div>
                        <div class="col-sm-3">
                            <b>Posted On: </b>
                            <span>{{$story->created_at}}</span>
                        </div>
                        <hr>

                        <div class="col-sm-12">
                            <b>Full Story:</b>
                            <span>{!! $story->content  !!} </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
@endsection