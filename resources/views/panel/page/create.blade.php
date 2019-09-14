@extends('layouts.theme')

@section('title')
    Create Page
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
                    <h4 class="pull-left">New Pages</h4>
                    <a href="{{ route('pages.index') }}" class="btn btn-default pull-right">
                        <i class="fa fa-angle-left"></i> Back</a>
                </div>

                <!-- page content -->
                <div class="content">
                    <form class="form" action="{{ route('pages.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" placeholder="Page Title"  value="{{ old('title') }}" name="title" required>
                            @include('errors.form',['field' => 'title'])
                        </div>
                        <div class="form-group {{ $errors->has('slug')?'has_error':'' }}">
                            <label for="slug">Slug</label>
                            <input type="text" class="form-control" placeholder="Slug"  value="{{ old('slug') }}" name="slug" required>
                            @include('errors.form',['field' => 'slug'])
                        </div>

                        <div class="form-group {{ $errors->has('featured_image')?'has_error':'' }}">
                            <label for="featured_image">Featured Image</label>
                            <input type="file" class="form-control" name="featured_image" accept="image/*" required>
                            @include('errors.form',['field' => 'featured_image'])
                        </div>

                        <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                            <label for="content">Details</label>
                            <textarea class="form-control" id="editor" placeholder="PageDetails"  value="{{ old('content') }}" name="content" required></textarea>
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
                                <i class="fa fa-copy"></i> Create Page
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
    </style>
    <link href="{{ asset('/plugin/flatpicker/flatpicker.min.css')}}" rel="stylesheet">
    <link href="{{ asset('/plugin/trumbowyg/dist/ui/trumbowyg.min.css') }}" rel="stylesheet">
@endsection

@section('js')
    <script src="{{ asset('/plugin/flatpicker/flatpicker.min.js') }}"></script>
    <script src="{{ asset('/plugin/trumbowyg/dist/trumbowyg.min.js') }}"></script>
    <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
    <script>tinymce.init({ selector:'textarea' });</script>
    <script>
        $(document).ready(function() {
            $('.feeSelect').on('change',"input[type='radio'][name='fair']", function(){
                var selected = $("input[type='radio'][name='fair']:checked");
                if (selected.length > 0) {
                    if (selected.val() == 1) {
                        $('.feeInput').css('display','block');
                    } else {
                        $('.feeInput').css('display','none');
                    }
                }
            });
            $(".datePicker").flatpickr();
            $('#editor').trumbowyg();
        });
    </script>
@endsection