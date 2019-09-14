
@extends('layouts.theme')
@section('title')
   Edit Permission
@endsection
@section('content')
    <div class='col-lg-4 col-lg-offset-4 padding-content'>

        {{-- @include ('errors.list') --}}

        <h1><i class='fa fa-key'></i> Edit {{$permission->name}}</h1>
        <br>
        {{ Form::model($permission, array('route' => array('permissions.update', $permission->id), 'method' => 'PUT')) }}

        <div class="form-group">
            {{ Form::label('name', 'Permission Name') }}
            {{ Form::text('name', null, array('class' => 'form-control')) }}
        </div>
        <br>
        {{ Form::submit('Update', array('class' => 'btn bg-color-theme')) }}

        {{ Form::close() }}

    </div>
    @endsection