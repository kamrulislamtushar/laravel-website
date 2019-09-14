@extends('layouts.theme')

@section('title')
Create Event
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
                <h4 class="pull-left">New Event</h4>
                <a href="{{ route('events.index') }}" class="btn btn-default pull-right">
                    <i class="fa fa-angle-left"></i> Back</a>
            </div>

            <!-- page content -->
            <div class="content">
                <form class="form" action="{{ route('events.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                        <label for="title">Event Title</label>
                        <input type="text" class="form-control" placeholder="Event Title"  value="{{ old('title') }}" name="title" required>
                        @include('errors.form',['field' => 'title'])
                    </div>
                    <div class="form-group {{ $errors->has('slug')?'has_error':'' }}">
                        <label for="slug">Slug</label>
                        <input type="text" class="form-control" placeholder="Slug"  value="{{ old('slug') }}" name="slug" required>
                        @include('errors.form',['field' => 'slug'])
                    </div>
                    <div class="row">
                        <div class="col-sm-6 form-group {{ $errors->has('date')?'has_error':'' }}">
                            <label for="date">Date</label>
                            <input type="text" class="form-control datePicker" placeholder="Event Date"  value="{{ old('date') }}" name="date" required>
                            @include('errors.form',['field' => 'date'])
                        </div>
                        <div class="col-sm-6 form-group {{ $errors->has('seats')?'has_error':'' }}">
                            <label for="seats">Number of Seats</label>
                            <input type="text" class="form-control" placeholder="Seats"  value="{{ old('seats') }}" name="seats" required>
                            @include('errors.form',['field' => 'seats'])
                        </div>
                    </div>
                    <div class="form-group {{ $errors->has('fair')?'has_error':'' }}">
                        <label for="fair">Fee</label>
                        <div class="row">
                            <div class="col-sm-3 feeSelect">
                                <label class="radio-inline"> 
                                    <input type="radio" class="radio" checked value="0" name="fair"> Free
                                </label>
                                <label class="radio-inline"> 
                                    <input type="radio" class="radio" value="1" name="fair"> Paid
                                </label>
                            </div>
                            <div class="col-sm-9">
                                <input type="text" class="form-control feeInput" placeholder="Event Fee" name="fee">
                            </div>
                        </div>

                        @include('errors.form',['field' => 'fair'])
                    </div>
                    <div class="form-group {{ $errors->has('banner')?'has_error':'' }}">
                        <label for="banner">Event Banner</label>
                        <input type="file" class="form-control" name="banner" accept="image/*">
                        @include('errors.form',['field' => 'banner'])
                    </div>
                    <div class="form-group {{ $errors->has('organizer')?'has_error':'' }}">
                        <label for="address">Organizer</label>
                        <input type="text" class="form-control" placeholder="Organizer"  value="{{ old('organizer') }}" name="organizer" required>
                        @include('errors.form',['field' => 'organizer'])
                    </div>
                    <div class="form-group {{ $errors->has('address')?'has_error':'' }}">
                        <label for="address">Event Venue</label>
                        <input type="text" class="form-control" placeholder="Event Venue"  value="{{ old('address') }}" name="address" required>
                        @include('errors.form',['field' => 'address'])
                    </div>

                    <div class="form-group {{ $errors->has('teaser')?'has_error':'' }}">
                        <label for="teaser">Teaser</label>
                        <textarea class="form-control" id="editor" placeholder="Teaser" name="teaser" value="{{ old('teaser') }}"></textarea>
                        @include('errors.form',['field' => 'teaser'])
                    </div>

                    <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                        <label for="content">Event Description</label>
                        <textarea class="form-control" id="editor" placeholder="Event Description"  value="{{ old('content') }}" name="content"></textarea>
                        @include('errors.form',['field' => 'content'])
                    </div>
                    <div class ="btn-group form-group">
                        <label for="content">Event Status</label>
                        <select class="form-control" name="status" id="">
                            <option value="1">Ongoing</option>
                            <option value="0">Expired</option>
                        </select>

                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn bg-color-theme">
                            <i class="fa fa-copy"></i> Store Event
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
<!-- <script src="{{ asset('/plugin/trumbowyg/dist/trumbowyg.min.js') }}"></script> -->
<script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
<script>tinymce.init({ selector:'textarea' });</script>
<script>
    $(document).ready(function() {
        $('.feeSelect').on('change',"input[type='radio'][name='fair']", function(){
            var selected = $("input[type='radio'][name='fair']:checked");
            if (selected.length > 0) {
                if (selected.val() == 1) {
                    alert('hello');
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
