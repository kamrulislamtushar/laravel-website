@extends('layouts.theme')

@section('title')

    {{ $news->title }}

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
                    <h4 class="pull-left">{{ $news->title }}</h4>
                    <div class="btn-group  pull-right text-right">
                        <a href="{{ route('news.index') }}" class="btn btn-default">
                            <i class="fa fa-angle-left"></i> Back</a>
                        <a href="{{ route('news.edit', $news) }}" class="btn btn-primary">
                            <i class="fa fa-edit"></i> Edit</a>
                        <a href="{{ route('news.destroy', $news) }}" class="btn btn-danger">
                            <i class="fa fa-trash"></i> Delete</a>
                    </div>
                </div>
                <div class="content">
                    @if($news->image)
                        <img src="{{ asset('/storage/'.$news->image) }}" class="img-responsive" alt="{{ $news->title }}">
                        <hr>
                    @endif
                    <div class="row">
                        <div class="col-sm-3">
                            <b>Title: </b>
                            <span>{{$news->Title}}</span>
                        </div>
                        <div class="col-sm-3">
                            <b>Posted On: </b>
                            <span>{{$news->created_at}}</span>
                        </div>
                        <hr>

                        <div class="col-sm-12">
                            <b>Full News:</b>
                            <span>{!! $news->content  !!} </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
@endsection