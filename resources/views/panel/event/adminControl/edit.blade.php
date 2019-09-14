@extends('layouts.theme')
@section('title')
Edit Event
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
                <h4 class="pull-left">Update Event</h4>
                <a href="{{ route('events.index') }}" class="btn btn-default pull-right">
                    <i class="fa fa-angle-left"></i> Back</a>
            </div>

            <!-- page content -->
            <div class="content">
                <form class="form" action="{{ route('events.update', $event) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" placeholder="Event Title"  value="{{ $event->title }}" name="title" required>
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
                            <input type="text" class="form-control datePicker" placeholder="Event Date"  value="{{ $event->date }}" name="date" required>
                            @include('errors.form',['field' => 'date'])
                        </div>
                        <div class="col-sm-6 form-group {{ $errors->has('seats')?'has_error':'' }}">
                            <label for="seats">Available Seats</label>
                            <input type="text" class="form-control" placeholder="Seats"  value="{{ $event->seats }}" name="seats" required>
                            @include('errors.form',['field' => 'seats'])
                        </div>
                    </div>
                    <div class="form-group {{ $errors->has('fair')?'has_error':'' }}">
                        <label for="fair">Fee</label>
                        <div class="row">
                            <div class="col-sm-3 feeSelect">
                                <label class="radio-inline"> 
                                    <input type="radio" class="radio" {{ $event->fair==0?'checked':'' }} value="0" name="fair"> Free
                                </label>
                                <label class="radio-inline"> 
                                    <input type="radio" class="radio" {{ $event->fair?'checked':'' }} value="1" name="fair"> Paid
                                </label>
                            </div>
                            <div class="col-sm-9">
                                <input type="text" value="{{ $event->fair }}" class="form-control feeInput" placeholder="Event Fee" name="fee">
                            </div>
                        </div>

                        @include('errors.form',['field' => 'fair'])
                    </div>
                    <div class="form-group {{ $errors->has('banner')?'has_error':'' }}">
                        <label for="banner">Event Banner</label>
                        @if($event->banner)
                            <div class="event-banner">
                                <img src="{{ asset('/storage/'.$event->banner) }}" alt="{{ $event->title }}" class="img-responsive">
                            </div>
                        @endif
                        <input type="file" class="form-control" name="banner" accept="image/*">
                        @include('errors.form',['field' => 'banner'])
                    </div>

                    <div class="form-group {{ $errors->has('organizer')?'has_error':'' }}">
                        <label for="organizer">Organizer</label>
                        <input type="text" class="form-control" placeholder="Organizer"  value="{{ $event->organizer }}" name="organizer" required>
                        @include('errors.form',['field' => 'organizer'])
                    </div>
                    <div class="form-group {{ $errors->has('address')?'has_error':'' }}">
                        <label for="address">Event Venue</label>
                        <input type="text" class="form-control" placeholder="Venue"  value="{{ $event->address }}" name="address" required>
                        @include('errors.form',['field' => 'address'])
                    </div>
                    <div class="form-group {{ $errors->has('teaser')?'has_error':'' }}">
                        <label for="teaser">Teaser</label>
                        <textarea class="form-control" id="teaser" placeholder="Teaser" name="teaser">{{$event->teaser }}</textarea>
                        @include('errors.form',['field' => 'teaser'])
                    </div>

                    <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                        <label for="content">Details</label>
                        <textarea class="form-control" id="editor" placeholder="Event Description" name="content">{!! $event->content !!}</textarea>
                        @include('errors.form',['field' => 'content'])
                    </div>
                    <div class ="btn-group form-group {{ $errors->has('status')?'has_error':'' }}">
                        <label for="content">Event Status</label>
                        <select class="form-control" name="status" id="">
                            <option value="1">Ongoing</option>
                            <option value="0">Expired</option>
                        </select>
                        @include('errors.form',['field' => 'status'])
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn bg-color-theme">
                            <i class="fa fa-copy"></i> Update Event
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
.event-banner img{
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
<script>
    $(document).ready(function() {
        var selectBox = $("input[type='radio'][name='fair']:checked");
        if (selectBox.length > 0) {
            if (selectBox.val() == 1) {
                $('.feeInput').css('display','block');
            } else {
                $('.feeInput').css('display','none');
            }
        }
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
