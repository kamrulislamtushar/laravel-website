@extends('layouts.theme')

@section('title')
Events
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            @include('shared.app.sidebar')
        </div>
        <div class="col-md-9">
            <div class="panel_title">
                <h3 class="pull-left">Events</h3>
                @can('add_events')
                    <a href="{{ route('events.create') }}" class="pull-right btn bg-color-theme">
                        <i class="fa fa-plus"></i> Create</a>
                @endcan
            </div>

            <div class="content">
                @if ($events->count() > 0)
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tr>
                            <th>#SL</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Organizer</th>
                            <th>Fees</th>
                            <th>Seats</th>
                            <th>Banner</th>
                            @can('edit_events', 'delete_events')
                                <th class="text-center">Actions</th>
                            @endcan
                        </tr>
                        @foreach($events as $key => $event)
                            <tr>
                                <td>{{ $key +1 }}</td>
                                <td>{{ $event->date }}</td>
                                <td><a href="{{ route('events.show', $event) }}">{{ $event->title }}</a></td>
                                <td>{{$event->organizer}}</td>
                                <td>{{ $event->fair?:'free' }}</td>
                                <td>{{ $event->seats }}</td>
                                <td>
                                    @if ($event->banner)
                                    <img src="{{ asset('/storage/'.$event->banner) }}" width="auto" height="30px" alt="{{ $event->banner }}">
                                    @else
                                    <img src="https://via.placeholder.com/30" width="auto" height="30px" alt="{{ $event->banner }}">
                                    @endif
                                </td>
                                <td>

                                @can('edit_events', 'delete_events')
                                    <td class="text-center">
                                        @include('shared._actions', [
                                            'entity' => 'events',
                                            'id' => $event->id
                                        ])
                                    </td>
                                 @endcan
                            </tr>
                        @endforeach
                    </table>
                </div>
                @else
                <div class="alert alert-info">
                    <h5>There's No Event Right Now!</h5>
                </div>
                @endif 
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="deleteEvent">
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

@section('js')
<script>
    $(document).ready(function(){
        $('.deleteEvent').click(function () {
            $('#deleteEvent form').attr('action', $(this).data('route'));
        });
    });
</script>
@endsection