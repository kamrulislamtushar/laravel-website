@extends('layouts.theme')
@section('title')
    Dashboard
    @endsection
@section('content')
<div class="container ">
    <div class="row padding-co">
        <div class="col-sm-2">
            @include('shared.app.sidebar')
        </div>
        <div class="col-sm-10 padding-content">
                <div class="profile-head ">
                    <!--col-md-4 col-sm-4 col-xs-12 close-->
                    <div class="col-md- col-sm-4 col-xs-12">
                        @if(!isset($profile->image))
                        <img src="{{ asset('images/default2.jpg')}}" class="img-responsive"/>
                        @else
                        <img src="" class="img-responsive"/>
                        @endif
                        <span class="btn btn-default uplod-file">
                                 <a href="{{ route('addpicture') }}" class="pull-right btn bg-color-theme ">
                                        <i class="glyphicon glyphicon-camera upload-photo-padding"></i></a>
                        </span>

                    </div>


                    <div class="col-md-5 col-sm-5 col-xs-12">
                        <h5>{{Auth::user()->name}}</h5>
                        <br>
                        @foreach($profile['work'] as $work)
                        <p class="">{{ $work['designation'] }} </p>
                        <ul>
                            <li><span class="glyphicon glyphicon-briefcase"> {{ $work['company'] }}</span></li>
                          @endforeach
                            @foreach($profile['contact'] as $contact)
                            <li><span class="glyphicon glyphicon-map-marker"></span> {{$contact['citizenship']}}</li>
                            <li><span class="glyphicon glyphicon-home"></span> {{$contact['address']}} </li>
                            <li><span class="glyphicon glyphicon-phone"></span> <a href="#" title="call"> {{$contact['mobile']}}</a></li>
                              @endforeach
                            <li><span class="glyphicon glyphicon-envelope"></span><a href="#" title="mail">{{Auth::user()->email}}</a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-8">
            <div  class="">
                <div class="tabbable-line">
                    <ul class="nav nav-tabs ">
                        <li class="active">
                            <a href="#tab_default_1" data-toggle="tab">Personal Info </a>
                        </li>
                        <li>
                            <a href="#tab_default_2" data-toggle="tab">Education</a>
                        </li>
                        <li>
                            <a href="#tab_default_3" data-toggle="tab">Work Experience</a>
                        </li>
                        <li>
                            <a href="#tab_default_4" data-toggle="tab">Contact Details</a>
                        </li>

                    </ul>
                    <div class="tab-content">
                        @include('profile.personal')
                        @include('profile.education')
                        @include('profile.work')
                        @include('profile.contact')
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="panel panel-default">
                <div class="menu_title">
                    <b>UIU CSE Alumni Site Traffic</b>
                    <p></p>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="info">Total Members:</label>
                                <p>550 </p>
                            </div>
                            <div class="form-group">
                                <label for="email">No of Events in 2018:</label>
                                <p>20</p>
                            </div>
                            <div class="form-group">
                                <label for="email">No of Stories:</label>
                                <p>16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</div>
@endsection
