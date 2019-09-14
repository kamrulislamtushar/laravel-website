@extends('layouts.theme')

@section('content')
<div class="container padding-content">
    <div class="card bg-light mt-3">
        <div class="card-header">

        </div>
        <div class="card-body">
            <form action="{{ route('import') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="file" name="file" id="file" class="form-control">
                <br>
                <button type="submit" class="btn btn-success">Import User Data</button>
                {{--<a class="btn btn-warning" href="{{ route('export') }}">Export User Data</a>--}}
            </form>
        </div>
    </div>
</div>
@endsection
