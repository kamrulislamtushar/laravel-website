@extends('layouts.theme')
@section('title')
Registered Students
@endsection
@section('content')

<div class="container">
  <div class="show">
   <h1 class="text-center">All Students Here</h1>
      <div class="col-md-2 export-button">
          <form action="{{route('student-data-export')}}" enctype="multipart/form-data">
              <button class="btn btn-success" type="submit">Export Data</button>
          </form>
      </div>
    <form action="{{ route('show')}}" method="GET">
     @csrf
      <div class="row">
        <div class="col-xs-6 col-md-4 pull-right">
          <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="Search" id="txtSearch"/>
            <div class="input-group-btn">
              <button class="btn btn-primary" type="submit">
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
   </form>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-sm-12">Name</th>
            <th scope="col-sm-12">Student_ID</th>
            <th scope="col-sm-12">Semester</th>
            <th scope="col-sm-12">CGPA</th>
            <th scope="col-sm-12">Email</th>
            <th scope="col-sm-12">Mobile</th>
            <th scope="col-sm-12">Expertise</th>
            <th scope="col-sm-12">Experience</th>
            <th scope="col-sm-12">CV</th>
            <th scope="col-sm-12">Delete</th>
          </tr>
        </thead>
        <tbody>
          @foreach($students as $name)
          <tr>
            <td>
              {{ $name->name }}
            </td>
            <td>
              {{ $name->student_id }}
            </td>
            <td>
              {{ $name->semester }}
            </td>
            <td>
              {{ $name->cgpa }}
            </td>
            <td>
              {{ $name->email }}
            </td>
            <td>
              {{ $name->mobile }}
            </td>
            <td>
              {{ $name->expertise }}
            </td>
            <td>
              {{ $name->experience }}
            </td>
            <td>
              <a target="_blank" href="{{ asset('/storage/'. $name->cv)}}" class="btn btn-primary">View CV</a>
            </td>
            <td>
               <a href="{{ route('student.delete', ['id' => $name->id] )}}" onclick="return confirm(' you want to delete?');" class=" btn btn-danger"> <i class="glyphicon glyphicon-trash"></i> </a>
            </td>
            <td>
          </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      
      <div class="pagination">
      {{$students->links()}}
      </div>
    </div>
  </div>
</div>
@endsection
