@extends('layouts.theme')

@section('title')
    Create News
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
                    <h4 class="pull-left">New Story</h4>
                    <a href="{{ route('news.index') }}" class="btn btn-default pull-right">
                        <i class="fa fa-angle-left"></i> Back</a>
                </div>

                <!-- page content -->
                <div class="content">
                    <form class="form" action="{{ route('news.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" placeholder="News Title"  value="{{ old('title') }}" name="title" required>
                            @include('errors.form',['field' => 'title'])
                        </div>
                        <div class="form-group {{ $errors->has('image')?'has_error':'' }}">
                            <label for="image">News Image</label>
                            <input type="file" class="form-control" name="image" accept="image/*">
                            @include('errors.form',['field' => 'image'])
                        </div>
                        <div class="form-group {{ $errors->has('teaser')?'has_error':'' }}">
                            <label for="teaser">Teaser</label>
                            <textarea class="form-control" id="teaser" placeholder="Teaser" name="teaser" value="{{ old('teaser') }}"></textarea>
                            @include('errors.form',['field' => 'teaser'])
                        </div>

                        <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                            <label for="content">Details</label>
                            <textarea class="form-control" id="editor" placeholder="News Detail"  value="{{ old('content') }}" name="content"></textarea>
                            @include('errors.form',['field' => 'content'])
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn bg-color-theme">
                                <i class="fa fa-copy"></i> Store News
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection
@section('css')
    <style>
    </style>
    <link href="{{ asset('/plugin/flatpicker/flatpicker.min.css')}}" rel="stylesheet">
    <link href="{{ asset('/plugin/trumbowyg/dist/ui/trumbowyg.min.css') }}" rel="stylesheet">
@endsection

@section('js')
    <script src="{{ asset('/plugin/flatpicker/flatpicker.min.js') }}"></script>
    <script src="{{ asset('/plugin/trumbowyg/dist/trumbowyg.min.js') }}"></script>
    <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
    <script>tinymce.init({ selector:'#editor' });</script>
@endsection
