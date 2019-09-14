@extends('layouts.theme')
@section('title')
    Users
@endsection
@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-sm-3">
                @include('shared.app.sidebar')
            </div>
            <div class="col-md-9">
                   <h1><i class="fa fa-users"></i> User Administration <a href="{{ route('roles.index') }}" class="btn btn-default pull-right">Roles</a></h1>
                       <hr>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">

                      <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>UIU ID</th>
                    <th>Date/Time Added</th>
                    <th>User Roles</th>
                    @can('edit_users', 'delete_users')
                        <th>Actions</th>
                    @endcan
                </tr>
                </thead>
                          <tbody>
                            @foreach ($users as $user)
                                <tr>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td>{{ $user->student_id }}</td>
                                    <td>{{ $user->created_at->format('F d, Y h:ia') }}</td>
                                    <td>{{  $user->roles()->pluck('name')->implode(' ') }}</td>{{-- Retrieve array of roles associated to a user and convert to string --}}
                                    @can('edit_users')
                                        <td class="text-center">
                                            @include('shared._actions', [
                                                'entity' => 'users',
                                                'id' => $user->id
                                            ])
                                        </td>
                                    @endcan
                                </tr>
                            @endforeach
                          </tbody>
                    </table>
                </div>
                <div class="text-center">
                    {{ $users->links() }}
                </div>
            </div>
        </div>
    </div>
    @endsection