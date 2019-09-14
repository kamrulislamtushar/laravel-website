
@extends('layouts.theme')
@section('title')
    Roles
@endsection
@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-sm-3">
                @include('shared.app.sidebar')
            </div>
            <div class="col-md-9 col-lg-4 ">
                    <h1><i class='fa fa-key'></i> Edit Role: {{$role->name}}</h1>
                    <hr>
                    {{ Form::model($role, array('route' => array('roles.update', $role->id), 'method' => 'PUT')) }}

                    <div class="form-group">
                        {{ Form::label('name', 'Role Name') }}
                        {{ Form::text('name', null, array('class' => 'form-control')) }}
                    </div>

                    <h5><b>Assign Permissions</b></h5>
                    @foreach ($permissions as $permission)

                        {{Form::checkbox('permissions[]',  $permission->id, $role->permissions ) }}
                        {{Form::label($permission->name, ucfirst($permission->name)) }}<br>

                    @endforeach
                    <br>
                    {{ Form::submit('Update', array('class' => 'btn bg-color-theme')) }}

                    {{ Form::close() }}
                </div>
        </div>
    </div>
    @endsection