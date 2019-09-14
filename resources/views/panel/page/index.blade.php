@extends('layouts.theme')

@section('title')
    Pages
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
                    <h3 class="pull-left">Pages</h3>
                    <a href="{{ route('pages.create') }}" class="pull-right btn bg-color-theme">
                        <i class="fa fa-plus"></i> Create</a>
                </div>

                <!-- page content -->
                <div class="content">
                    @if ($pages->count() > 0)
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tr>
                                    <th>#SL</th>
                                    <th>title</th>
                                    <th>Slug</th>
                                    <th>Content</th>
                                    <th>Featured Image</th>
                                    <th>Is Published</th>
                                    <th>Action</th>
                                </tr>
                                @foreach($pages as $key => $page)
                                    <tr>
                                        <td>{{ $key +1 }}</td>
                                        <td>{{ $page->title }}</td>
                                        <td>{{ $page->slug}}</td>
                                        <td>{{ $page->content }}</td>
                                        <td>
                                            @if ($page->featured_image)
                                                <img src="{{asset('storage/'.$page->featured_image) }}" width="auto" height="30px" alt="{{ $page->featured_image }}">
                                            @else
                                                <img src="https://via.placeholder.com/30" width="auto" height="30px" alt="{{ $page->featured_image }}">
                                            @endif
                                        </td>
                                        <td>
                                            @if($page->is_published==1)
                                                {{'Yes'}}

                                            @else
                                            {{'No'}}
                                            @endif
                                        </td>
                                        <td>
                                            <!-- Single button -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm bg-color-theme" data-toggle="dropdown">
                                                    <i class="fa fa-ellipsis-h"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right ">
                                                    <li><a href="{{ route('pages.show', $page) }}">View</a></li>
                                                    <li><a href="{{ route('pages.edit', $page) }}">Edit</a></li>
                                                    <li><a href="#delete"
                                                           data-toggle="modal"
                                                           class="deletePage"
                                                           data-route="{{ route('pages.destroy',$page) }}"
                                                           data-target="#deletePage">Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    @else
                        <div class="alert alert-info">
                            <b>No Pages Available </b>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="deletePage">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel"><i class="fa fa-trash"></i> Delete Page</h4>
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
            $('.deletePage').click(function () {
                $('#deletePage form').attr('action', $(this).data('route'));
            });
        });
    </script>
@endsection