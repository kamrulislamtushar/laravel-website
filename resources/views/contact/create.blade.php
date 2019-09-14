@extends('layouts.theme')
@section('title', 'Contact Us')
@section('content')
 <div class="container">
   <div class="contact-form">
      <h1 class="text-center">Get in Touch</h1>
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
          <div class="col-md-6 col-lg-offset-3">
            <form action="{{ url('/sendmail/send') }}" method="POST">
              @csrf 
              <div class="form-group">
                <label for="subject">Enter Your Subject</label>
                <input required type="text" name="subject" class="form-control input-lg " placeholder="Enter your subject">
              </div>

              <div class="form-group">
                <label for="name">Enter Your Email</label>
                <input required type="email" name="email" class="form-control input-lg " placeholder="Enter your email">
              </div>

              <div class="form-group">
                <label for="name">Message</label>
                <textarea required name="message" class="form-control input-lg" rows="10"></textarea>
              </div>
              
              <div class="form-group account-content">
             <button type="submit" class="bnt bnt-theme text-regular text-uppercase">Send</button>
            </div>
            </form>
          </div>
        </div>    
     </div> 
  </div>
@endsection