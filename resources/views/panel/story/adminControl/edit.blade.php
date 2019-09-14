@extends('layouts.theme')
@section('title')
    Edit Story
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
                    <h4 class="pull-left">Update Story</h4>
                    <a href="{{ route('stories.index') }}" class="btn btn-default pull-right">
                        <i class="fa fa-angle-left"></i> Back</a>
                </div>

                <!-- page content -->
                <div class="content">
                    <form class="form" action="{{ route('stories.update', $story) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" placeholder="Story Title"  value="{{ $story->title }}" name="title" required>
                            @include('errors.form',['field' => 'title'])
                        </div>
                        <div class="form-group {{ $errors->has('name')?'has_error':'' }}">
                            <label for="name">Featured Alumni Name</label>
                            <input type="text" class="form-control" placeholder="Featured Alumni Name"  value="{{ $story->name }}" name="name" required>
                            @include('errors.form',['field' => 'name'])
                        </div>

                        <div class="form-group {{ $errors->has('image')?'has_error':'' }}">
                            <label for="image">Story Image</label>
                            @if($story->image)
                                <div class="story-image">
                                    <img src="{{ asset('/storage/'.$story->image) }}" alt="{{ $story->title }}" class="img-responsive">
                                </div>
                            @endif
                            <input type="file" class="form-control" name="image" id="image" accept="image/*">
                            @include('errors.form',['field' => 'image'])
                        </div>
                        <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                            <label for="teaser">Teaser</label>
                            <textarea class="form-control" id="teaser" placeholder="Teaser" name="teaser">{!! $story->teaser !!}</textarea>
                            @include('errors.form',['field' => 'teaser'])
                        </div>

                        <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                            <label for="content">Story</label>
                            <textarea class="form-control" id="editor" placeholder="Story" name="content">{!! $story->content !!}</textarea>
                            @include('errors.form',['field' => 'content'])
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn bg-color-theme">
                                <i class="fa fa-copy"></i> Update Story
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

        .story-image img{
            max-height: 200px;
        }
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
