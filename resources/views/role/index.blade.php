@extends('layouts.theme')

@section('title', ' Roles')

@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-sm-3">
                @include('shared.app.sidebar')
            </div>
            <div class="col-md-9 col-lg-8 ">
                <h1><i class="fa fa-key"></i> Roles</h1>
                <a href="{{ route('users.index') }}" class="btn btn-default pull-right">Users</a>
                <hr>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Permissions</th>
                                @can('edit_users', 'delete_users')
                                    <th>Actions</th>
                                @endcan
                            </tr>
                        </thead>

                        <tbody>
                            @foreach ($roles as $role)
                            <tr>

                                <td>{{ $role->name }}</td>

                                <td>{{  $role->permissions()->pluck('name')->implode(' ') }}</td>
                                <br>{{-- Retrieve array of permissions associated to a role and convert to string --}}
                                @can('edit_users')
                                <td class="text-center">
                                    @include('shared._actions', [
                                        'entity' => 'roles',
                                        'id' => $role->id
                                    ])
                                </td>
                            @endcan
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <a href="{{route('roles.create')}}" class="btn btn-success">Add Role</a>
            </div>
        </div>
    </div>

@endsection