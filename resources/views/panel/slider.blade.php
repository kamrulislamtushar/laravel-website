@extends('layouts.theme')

@section('title')
Sliders
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
                <h3 class="pull-left">Sliders</h3>
                <a href="#" class="pull-right btn bg-color-theme" data-toggle="modal" data-target="#createSlider">
                    <i class="fa fa-plus"></i> Create</a>
            </div>

            <!-- page content -->
            <div class="content">
                @if ($sliders->count() > 0)
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tr>
                            <th>#SL</th>
                            <th>Date</th>
                            <th>title</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        @foreach($sliders as $key => $slider)
                            <tr>
                                <td>{{ $key +1 }}</td>
                                <td>{{ $slider->created_at }}</td>
                                <td>{{ $slider->title }}</td>
                                <td>
                                    @if ($slider->image)
                                    <img src="{{ asset('/storage/'.$slider->image) }}" width="auto" height="30px" alt="{{ $slider->image }}">
                                    @else
                                    <img src="https://via.placeholder.com/30" width="auto" height="30px" alt="{{ $slider->title }}">
                                    @endif
                                </td>
                                <td>
                                <!-- Single button -->
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm bg-color-theme" data-toggle="dropdown">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right ">
                                        <li><a href="#"
                                            data-toggle="modal"
                                            class="viewSlider"
                                            data-slider="{{ json_encode($slider) }}"
                                            data-target="#viewSlider">view</a></li>
                                        <li><a href="#"
                                            data-toggle="modal"
                                            class="editSlider"
                                            data-route="{{ route('sliders.update', $slider) }}"
                                            data-slider="{{ json_encode($slider) }}"
                                            data-target="#editSlider">Edit</a></li>
                                        <li><a href="#delete"
                                            data-toggle="modal"
                                            class="deleteSlider"
                                            data-route="{{ route('sliders.destroy',$slider) }}"
                                            data-target="#deleteSlider">Delete</a></li>
                                    </ul>
                                </div>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                @else
                <div class="alert alert-info">
                    <b>Oop's !! No Slider </b>
                </div>
                @endif 
            </div>
        </div>
    </div>
</div>
<!-- create Modal -->
<div class="modal fade" id="createSlider">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Create Slider</h4>
        </div>
      <div class="modal-body">
        <form action="{{ route('sliders.store') }}" method="post" enctype="multipart/form-data">
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
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn bg-color-theme">
                    <i class="fa fa-copy"></i> Store Slider
                </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- edit Modal -->
<div class="modal fade" id="editSlider">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Edit Slider</h4>
        </div>
      <div class="modal-body">
        <form action="" method="post" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                <label for="title">Title</label>
                <input type="text" id="e_title" class="form-control" placeholder="News Title"  value="{{ old('title') }}" name="title" required>
                @include('errors.form',['field' => 'title'])
            </div>
            <div class="form-group {{ $errors->has('image')?'has_error':'' }}">
                <label for="image">Slider Image</label>
                <p id="e_image">
                    <img src="" width="200px" class="img-responsive">
                </p>
                <input type="file" class="form-control" name="image" accept="image/*">
                @include('errors.form',['field' => 'image'])
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn bg-color-theme">
                    <i class="fa fa-copy"></i> Update Slider
                </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- view Modal -->
<div class="modal fade" id="viewSlider">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title news-title" id="myModalLabel"></h4>
        </div>
      <div class="modal-body">
          <div class="news-content"></div>
      </div>
      <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- Delete Modal -->
<div class="modal fade" id="deleteSlider">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"><i class="fa fa-trash"></i> Delete Slider</h4>
        </div>
      <div class="modal-body">
        <h2>Are you sure?</h2><br>
        <form action="" method="post">
            @csrf
            @method('DELETE')
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-danger">Yes</button>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection

@section('js')
<script>
    $(document).ready(function() {
        $('.viewSlider').click(function() {
            var slider  = $(this).data('slider');
            $('.news-title').text(slider.title);
            $('.news-content').html('<div>'+
                '<img src="/storage/'+ slider.image +'" class="img-responsive" alt="'+slider.title+'">'+
                '<br><p>'+slider.content+'</p>'+
            '</div>');
        });
        $('.editSlider').click(function() {
            var slider  = $(this).data('slider');
            $('#editSlider form').attr('action', $(this).data('route'));
            $('#editSlider form #e_title').val(slider.title);
            $('#editSlider form #e_image img').attr('src', '/storage/'+slider.image);
        });

        $('.deleteSlider').click(function () {
            $('#deleteSlider form').attr('action', $(this).data('route'));
        });
    });
</script>
@endsection