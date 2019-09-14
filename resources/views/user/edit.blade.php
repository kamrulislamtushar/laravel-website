@extends('layouts.theme')
@section('title')
    Edit User
@endsection
@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-sm-3">
                @include('shared.app.sidebar')
            </div>
            <div class="col-md-9 col-lg-4">
                <h3><i class='fa fa-user-plus'></i> Edit {{$user->name}}</h3>
                <hr>
                {{-- @include ('errors.list') --}}

                {{ Form::model($user, array('route' => array('users.update', $user->id), 'method' => 'PUT')) }} {{-- Form model binding to automatically populate our fields with user data --}}

                <div class="form-group">
                    {{ Form::label('name', 'Name') }}
                    {{ Form::text('name', null, array('class' => 'form-control')) }}
                </div>
                <div class="form-group">
                    {{ Form::label('student_id', 'UIU ID') }}
                    {{ Form::text('student_id', null, array('class' => 'form-control')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('email', 'Email') }}
                    {{ Form::email('email', null, array('class' => 'form-control')) }}
                </div>

                <h5><b>Give Role</b></h5>

                <div class='form-group'>
                    @foreach ($roles as $role)
                        {{ Form::checkbox('roles[]',  $role->id, $user->roles ) }}
                        {{ Form::label($role->name, ucfirst($role->name)) }}<br>

                    @endforeach
                </div>

                <div class="form-group">
                    {{ Form::label('password', 'Password') }}<br>
                    {{ Form::password('password', array('class' => 'form-control')) }}

                </div>

                <div class="form-group">
                    {{ Form::label('password', 'Confirm Password') }}<br>
                    {{ Form::password('password_confirmation', array('class' => 'form-control')) }}

                </div>

                {{ Form::submit('Update', array('class' => 'btn bg-color-theme')) }}

                {{ Form::close() }}

            </div>
        </div>
    </div>


@endsection