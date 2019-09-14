@extends('layouts.theme')

@section('title')
    Stories
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
                    <h3 class="pull-left">Stories</h3>
                    <a href="{{ route('stories.create') }}" class="pull-right btn bg-color-theme">
                        <i class="fa fa-plus"></i> Create</a>
                </div>

                <!-- page content -->
                <div class="content">
                    @if ($stories->count() > 0)
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tr>
                                    <th>#SL</th>
                                    <th>Title</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                                @foreach($stories as $key => $story)
                                    <tr>
                                        <td>{{ $key +1 }}</td>
                                         <td>{{ $story->title }}</td>
                                        <td>{{$story->name}}</td>
                                        <td>
                                            @if ($story->image)
                                                <img src="{{ asset('/storage/'.$story->image) }}" width="auto" height="30px" alt="{{ $story->image }}">
                                            @else
                                                <img src="https://via.placeholder.com/30" width="auto" height="30px" alt="{{ $story->image }}">
                                            @endif
                                        </td>
                                        <td>
                                            <!-- Single button -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm bg-color-theme" data-toggle="dropdown">
                                                    <i class="fa fa-ellipsis-h"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right ">
                                                    <li><a href="{{ route('stories.show', $story) }}">View</a></li>
                                                    <li><a href="{{ route('stories.edit', $story) }}">Edit</a></li>
                                                    <li><a href="#delete"
                                                           data-toggle="modal"
                                                           class="deleteStory"
                                                           data-route="{{ route('stories.destroy',$story) }}"
                                                           data-target="#deleteStory">Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    @else
                        <div class="alert alert-info">
                            <h5>There's No Stories Right Now!</h5>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="deleteStory">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel"><i class="fa fa-trash"></i> Delete Story</h4>
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
        $(document).ready(function(){
            $('.deleteStory').click(function () {
                $('#deleteStory form').attr('action', $(this).data('route'));
            });
        });
    </script>
@endsection