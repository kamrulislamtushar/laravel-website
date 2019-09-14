@extends('layouts.theme')
@section('title')
Submit your Donation
@endsection
@section('content')
  <div class="donation">
    <div class="container">
      <h1 class="text-center">Submit your Contribution</h1>
      @if(Session::has('success'))
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">
        <ul>
          <li class="alert alert-success">{{ Session::get('success') }}</li>
        </ul>
      </div>
    </div>
    @endif

    @if(count($errors)>0)
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">
        <ul>
          @foreach($errors->all() as $error)
          <li class="alert alert-danger">{{ $error }}</li>
          @endforeach
        </ul>
      </div>
    </div>

    @endif
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
          <form action="/create-contribution" method="POST">
            @csrf
            <div class="form-group">
              <label for="name">Enter your name</label>
              <input required type="text" name="name" class="form-control" placeholder="Enter your name">
            </div>

            <div class="form-group">
              <label for="name">Enter your email</label>
              <input required type="text" name="email" class="form-control" placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="name">Enter your phone</label>
              <input required type="text" name="phone" class="form-control" placeholder="Enter your phone">
            </div>

            <div class="form-group">
              <label for="donation">Enter your contribution amount</label>
              <input required type="number" name="donation" class="form-control" placeholder="Enter your contribution amount">
            </div>
            <div class="form-group account-content">
             <button type="submit" class="bnt bnt-theme text-regular text-uppercase">Contribute</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
@endsection


