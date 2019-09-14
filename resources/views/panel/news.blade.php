@extends('layouts.theme')

@section('title')
News
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
                <h3 class="pull-left">News</h3>
                <a href="#" class="pull-right btn bg-color-theme" data-toggle="modal" data-target="#createNews">
                    <i class="fa fa-plus"></i> Create</a>
            </div>

            <!-- page content -->
            <div class="content">
                @if ($news->count() > 0)
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tr>
                            <th>#SL</th>
                            <th>Date</th>
                            <th>title</th>
                            <th>banner</th>
                            <th>Action</th>
                        </tr>
                        @foreach($news as $key => $s_news)
                            <tr>
                                <td>{{ $key +1 }}</td>
                                <td>{{ $s_news->created_at }}</td>
                                <td>{{ $s_news->title }}</td>
                                <td>
                                    @if ($s_news->image)
                                    <img src="{{ asset('/storage/'.$s_news->image) }}" width="auto" height="30px" alt="{{ $s_news->image }}">
                                    @else
                                    <img src="https://via.placeholder.com/30" width="auto" height="30px" alt="{{ $s_news->title }}">
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
                                            class="viewNews"
                                            data-news="{{ json_encode($s_news) }}"
                                            data-target="#viewNews">view</a></li>
                                        <li><a href="#"
                                            data-toggle="modal"
                                            class="editNews"
                                            data-route="{{ route('news.update', $s_news) }}"
                                            data-news="{{ json_encode($s_news) }}"
                                            data-target="#editNews">Edit</a></li>
                                        <li><a href="#delete"
                                            data-toggle="modal"
                                            class="deleteNews"
                                            data-route="{{ route('news.destroy',$s_news) }}"
                                            data-target="#deleteNews">Delete</a></li>
                                    </ul>
                                </div>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                @else
                <div class="alert alert-info">
                    <b>No News Available  </b>
                </div>
                @endif 
            </div>
        </div>
    </div>
</div>
<!-- create Modal -->
<div class="modal fade" id="createNews">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Create News</h4>
        </div>
      <div class="modal-body">
        <form action="{{ route('news.store') }}" method="post" enctype="multipart/form-data">
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
            
            <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                <label for="content">Detail</label>
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

<!-- edit Modal -->
<div class="modal fade" id="editNews">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Edit News</h4>
        </div>
      <div class="modal-body">
        <form action="#" method="post" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                <label for="title">Title</label>
                <input type="text" id="e_title" class="form-control" placeholder="News Title"  value="{{ old('title') }}" name="title" required>
                @include('errors.form',['field' => 'title'])
            </div>
            <div class="form-group {{ $errors->has('image')?'has_error':'' }}">
                <label for="image">News Image</label>
                <p id="e_image">
                    <img src="" width="200px" class="img-responsive">
                </p>
                <input type="file" class="form-control" name="image" accept="image/*">
                @include('errors.form',['field' => 'image'])
            </div>
            
            <div class="form-group {{ $errors->has('content')?'has_error':'' }}">
                <label for="content">Detail</label>
                <textarea class="form-control" id="editEditor" placeholder="News Detail"  value="{{ old('content') }}" name="content"></textarea>
                @include('errors.form',['field' => 'content'])
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn bg-color-theme">
                    <i class="fa fa-copy"></i> Update News
                </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- view Modal -->
<div class="modal fade" id="viewNews">
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
<div class="modal fade" id="deleteNews">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"><i class="fa fa-trash"></i> Delete Event</h4>
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
<script>tinymce.init({ selector:'textarea' });</script>
<script>
    $(document).ready(function() {
        $('#editor').trumbowyg();

        $('.viewNews').click(function() {
            var news  = $(this).data('news');
            $('.news-title').text(news.title);
            $('.news-content').html('<div>'+
                '<img src="/storage/'+ news.image +'" class="img-responsive" alt="'+news.title+'">'+
                '<br><p>'+news.content+'</p>'+
            '</div>');
        });
        $('.editNews').click(function() {
            var news  = $(this).data('news');
            $('#editNews form').attr('action', $(this).data('route'));
            $('#editNews form #e_title').val(news.title);
            $('#editNews form #e_image img').attr('src', '/storage/'+news.image);
            // $('').val(news.content);
            $('#editNews form #editEditor').trumbowyg('destroy');
            $('#editNews form #editEditor').html(news.content);
            $('#editNews form #editEditor').trumbowyg(); 
        });

        $('.deleteNews').click(function () {
            $('#deleteNews form').attr('action', $(this).data('route'));
        });
    });
</script>
@endsection