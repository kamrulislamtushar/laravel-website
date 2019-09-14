
@extends('layouts.theme')
@section('title')
    Add New Role
@endsection
@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-sm-3">
                @include('shared.app.sidebar')
            </div>
            <div class='col-lg-4'>
                <h1><i class='fa fa-key'></i> Add Role</h1>
                <hr>
                <div class="content">
                    <form class="form" action="{{ route('roles.store') }}" method="post" >
                        @csrf
                        <div class="form-group {{ $errors->has('title')?'has_error':'' }}">
                            <label for="name">Role</label>
                            <input type="text" class="form-control" placeholder="Role Title"  name="name" required>
                            @include('errors.form',['field' => 'name'])
                        </div>
                        <div class='form-group'>
                            @foreach ($permissions as $permission)
                                {{ Form::checkbox('permissions[]',  $permission->id ) }}
                                {{ Form::label($permission->name, ucfirst($permission->name)) }}<br>

                            @endforeach
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn bg-color-theme">
                                <i class="fa fa-copy"></i> Add Role
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection