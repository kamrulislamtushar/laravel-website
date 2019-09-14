@extends('layouts.theme')
@section('content')
    <link rel="stylesheet" href="{{ asset('css/croppie.min.css') }}">
    <script src="{{ asset('js/croppie.js') }}"></script>
    <div class="panel panel-info padding-content">
        <div class="panel-heading">Upload Your Profile Picture</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4 text-center">
                    <div id="upload-demo"></div>
                </div>
                <div class="col-md-4" style="padding:5%;">
                    <strong>Choose image to crop:</strong>
                    {{--<form class="form-control"  method="POST" enctype = "multipart/form-data">--}}
                        {{--@csrf--}}
                    <input type="file" id="image_file">
                    <button class="btn btn-primary btn-block upload-image" style="margin-top:2%">Upload Image</button>
                    <div class="alert alert-success" id="upload-success" style="display: none;margin-top:10px;"></div>
                    {{--</form>--}}
                </div>
                <div class="col-md-4">
                    <div id="preview-crop-image" style="background:#9d9d9d;width:300px;padding:50px 50px;height:300px;"></div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        var resize = $('#upload-demo').croppie({
            enableExif: true,
            enableOrientation: true,
            viewport: { // Default { width: 100, height: 100, type: 'square' }
                width: 200,
                height: 200,
                type: 'circle' //square
            },
            boundary: {
                width: 300,
                height: 300
            }
        });
        $('#image_file').on('change', function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                resize.croppie('bind',{
                    url: e.target.result
                }).then(function(){
                    console.log('jQuery bind complete');
                });
            }
            reader.readAsDataURL(this.files[0]);
        });
        $('.upload-image').on('click', function (ev) {
            resize.croppie('result', {
                type: 'canvas',
                size: 'viewport'
            }).then(function (img) {
                html = '<img src="' + img + '" />';
                $("#preview-crop-image").html(html);
                $("#upload-success").html("Images cropped and uploaded successfully.");
                $("#upload-success").show();
                 $.ajax({
                   url: '/addpicture',
                   type: "POST",
                  data: {"image":img,_token: '{{csrf_token()}}'},
                   success: function (data) {
                       console.log('Data ',data)
                   }
                 });
            });
        });
    </script>
@endsection