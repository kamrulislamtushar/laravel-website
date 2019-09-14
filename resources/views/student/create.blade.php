@extends('layouts.theme')
@section('title')
Apply For Job Fair
@endsection
@section('content')

<div class="registration">
  <div class="container">
      <h1 class="text-center">Application for Job Fair 2019</h1>
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
        <form action="/create/registration" method="POST" enctype="multipart/form-data">
          @csrf
          <div class="form-group">
            <label for="name">Enter your name</label>
            <input required type="text" name="name" class="form-control" placeholder="Enter your name">
          </div>

          <div class="form-group">
            <label for="id">Student ID</label>
            <input required type="text" name="student_id" class="form-control" maxlength="9" placeholder="Enter your ID">
          </div> 

          <div class="form-group">
            <label for="exampleFormControlSelect1">Number of remaining trimester</label>
            <select class="form-control" name="semester" id="exampleFormControlSelect1">
             <option>0</option>
             <option>1</option>
             <option>2</option>
             <option>3</option>
           </select>
         </div>

          <div class="form-group">
            <label for="cgpa">CGPA</label>
            <input required type="text" name="cgpa" class="form-control" placeholder="Enter your CGPA">
          </div>

          <div class="form-group">
            <label for="email">Enter your email</label>
            <input required type="email" name="email" class="form-control" placeholder="Enter your email">
          </div>

          <div class="form-group">
            <label for="mobile">Mobile</label>
            <input required type="phone" name="mobile" class="form-control" maxlength="11" placeholder="Enter your mobile no:">
          </div>

          <div class="form-group">
            <label for="expertise">Expertise (Comma separated): </label>
            <p>i,e: C,C++,Java,PHP,Laravel,.Net,etc</p> <br>
            <input required type="text" name="expertise" class="form-control" placeholder="Area of expertise fields">
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Year of Experience</label>
            <select class="form-control" name="experience" id="exampleFormControlSelect1">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">> 10 </option>
           </select>
         </div>

          <div class="form-group">
            <label for="cv">Upload CV</label>
            <input type="file" class="form-control-file" name="cv">
          </div>


          <div class="form-group account-content">
            <button type="submit" class="bnt bnt-theme text-regular text-uppercase">Apply</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection
