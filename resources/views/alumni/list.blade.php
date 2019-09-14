@extends('layouts.theme')
@section('title')
    Alumni Members
@endsection
@section('content')
        <div class="container">
            <div class="alumni-directory">
                <div class="top-section">
                    <div class="row">
                        <div class="title-page text-left col-md-6 col-sm-12 col-xs-12">
                            <h4 class="text-regular"> Alumni Directory</h4>
                        </div>
                    </div>
                </div>
             <div class="row ">
                 <div class="alumni-directory-content ">
                     <table id="alumniTable" class="table table-striped table-borderless table-hover table-responsive table-responsive-sm col-sm-12 col-lg-12 col-md-12 col-xs-12 " style="width: 100%;">
                         <thead class="head-style">
                         <tr >
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Profile</th>
                         </tr>
                         </thead>
                     </table>
                 </div>
             </div>

            </div>
        </div>
@endsection

