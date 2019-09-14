@extends('layouts.theme')
@section('title')
    {{$user->name}}
    @endsection
@section('content')
<div class="container ">
    <div class="row padding-co">
        <div class="col-sm-12 padding-content">
                <div class="profile-head ">
                    <!--col-md-4 col-sm-4 col-xs-12 close-->
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <img src="{{ asset('images/default2.jpg')}}" class="img-responsive"/>
                    </div>


                    <div class="col-md-5 col-sm-5 col-xs-12">
                        <h5>{{$user->name}}</h5>
                        @if($user->profile['information']['work'])
                        <p class="">{{$user->profile['information']['work']['designation']}} </p>
                        @endif
                        {{--<ul>--}}
                            {{--<li><span class="glyphicon glyphicon-briefcase">  {{$user->profile['information']['work'][0]['company']}}</span></li>--}}
                            {{--<li><span class="glyphicon glyphicon-map-marker"></span>  {{$user->profile['information']['contact'][0]['citizenship']}}</li>--}}
                        {{--</ul>--}}
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
                        @include('alumni.profile.personal')
                        @include('alumni.profile.education')
                        @include('alumni.profile.work')
                        @include('alumni.profile.contact')
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection

