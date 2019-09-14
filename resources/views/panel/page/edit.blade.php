@extends('layouts.theme')
@section('title')
    Edit Page
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
                    <h4 class="pull-left">Edit Page</h4>
                    <a href="{{ route('pages.index') }}" class="btn btn-default pull-right">
                        <i class="fa fa-angle-left"></i> Back</a>
                </div>

                <!-- page content -->
                <div class="content">
                    <form class="form" action="{{ route('pages.update', $page) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PATCH')
                        <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" placeholder="{Page Title"  value="{{ $page->title }}" name="title" >
                            @include('errors.form',['field' => 'title'])
                        </div>

                        <div class="form-group {{ $errors->has('slug')?'has_error':'' }}">
                            <label for="title">Slug</label>
                            <input type="text" class="form-control" placeholder="{Page Slug"  value="{{ $page->slug }}" name="slug" >
                            @include('errors.form',['field' => 'slug'])
                        </div>
                        <div class="form-group {{ $errors->has('featured_image')?'has_error':'' }}">
                            <label for="featured_image">Featured Image</label>
                            @if($page->featured_image)
                                <div class="page-featured_image">
                                    <img src="{{ asset('/storage/'.$page->featured_image) }}" alt="{{ $page->title }}" class="img-responsive">
                                </div>
                            @endif
                            <input type="file" class="form-control" name="featured_image" accept="image/*">
                            @include('errors.form',['field' => 'featured_image'])
                        </div>
                        <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                            <label for="content">Details</label>
                            <textarea class="form-control" id="editor" placeholder="Page Details" name="content" >{!! $page->content !!}</textarea>
                            @include('errors.form',['field' => 'content'])
                        </div>
                        <div class ="btn-group form-group">
                            <label for="content">Publish Page</label>
                            <select class="form-control" name="is_published" id="">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>

                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn bg-color-theme">
                                <i class="fa fa-copy"></i> Update Page
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
        .feeInput {
            display: none;
        }
        .page-featured_image-banner {
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
    <script>tinymce.init({ selector:'textarea' });</script>
@endsection