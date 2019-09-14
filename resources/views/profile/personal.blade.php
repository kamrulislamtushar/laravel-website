<div class="tab-pane active" id="tab_default_1">
    <div class="well well-sm">
        <h4 >PERSONAL DATA</h4>
            @if(count($profile['personal'])<=0)
            <button type="button" class="btn btn-primary btn-sm float-right"
            data-name ="{{Auth::user()->name}}" data-student_id = "{{ Auth::user()->student_id }}"
            data-toggle="modal" data-target="#personalData">
            <i class="glyphicon glyphicon-plus"></i>ADD</i>
            </button>
            @else
            <button type="button" class="btn btn-primary btn-sm float-right"
            data-name ="{{Auth::user()->name}}" data-student_id = "{{ Auth::user()->student_id }}"
            data-toggle="modal" data-target="#personalDataEdit">
            <i class="glyphicon glyphicon-edit"></i>EDIT</i>
            </button>
            @endif


    </div>

    <table class="table bio-table">
        <tbody>
        @foreach ($profile['personal'] as $personal)
        <tr>
            <td><i class="glyphicon glyphicon-user"></i>  Name</td>
            <td>: {{Auth::user()->name}}</td>
        </tr>
        <tr>
            <td><i class="fa fa-id-card-o"></i>  UIU ID</td>
            <td>: {{ Auth::user()->student_id }}</td>
        </tr>

        <tr>
            <td><i class="glyphicon glyphicon-plus-sign"></i>  Gender</td>
            <td>: {{$personal['gender']}}</td>

        </tr>
        <tr>

            <td><i class="glyphicon glyphicon-tint"></i>  Blood Group</td>
            <td>: {{$personal['blood']}}</td>

        </tr>
        <tr>

            <td><i class="glyphicon glyphicon-calendar"></i>  Date of Birth</td>
            <td>: {{$personal['bday']}}</td>

        </tr>

        </tbody>
        @endforeach
    </table>

</div>
<div class="modal fade" id="personalData" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <button type="button" class="close"
                        data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Personal Information
                </h4>
            </div>

            <div class="modal-body">
               {{--Form Start--}}
                <form class="form-horizontal" role="form" action="{{route('home.store')}}" method="post">
                    @csrf
                    <input name="info" value="personal" hidden>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="name"> Name</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('name')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input id="name" name="name" placeholder="Name" class="form-control"  type="text" required>
                                @include('errors.form',['field' => 'name'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="student_id">UIU ID</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('student_id')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="fa fa-id-card-o"></i></span>
                                <input id="student_id" name="student_id" placeholder="UIU ID" class="form-control"  type="number" required>
                                @include('errors.form',['field' => 'student_id'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="gender"> Gender</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group  {{ $errors->has('gender')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-plus-sign"></i></span>
                                <select id="gender" class="form-control" name="gender" required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                @include('errors.form',['field' => 'gender'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="bday"> Date Of Birth</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('bday')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input class="form-control" type="date" name="bday">
                                @include('errors.form',['field' => 'bday'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('blood')?'has_error':'' }}">
                        <label class="col-md-4 control-label" for="blood">Blood Group</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-tint"></i></span>
                                <select id="blood" class="form-control" name="blood">
                                    <option value="A(+VE)">A(+VE)</option>
                                    <option value="A(-VE)">A(-VE)</option>
                                    <option value="AB(+VE)">AB(+VE)</option>
                                    <option value="AB(-VE)">AB(-VE)</option>
                                    <option value="B(+VE)">B(+VE)</option>
                                    <option value="B(-VE)">B(-VE)</option>
                                    <option value="O(+VE)">O(+VE)</option>
                                    <option value="O(-VE)">O(-VE)</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                                @include('errors.form',['field' => 'date'])
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="personalDataEdit" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <button type="button" class="close"
                        data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Personal Information
                </h4>
            </div>

            <div class="modal-body">
               {{--Form Start--}}
                <form class="form-horizontal" role="form" action="{{route('home.update','update')}}" method="post">
                    @csrf
                    {{ method_field('patch') }}
                    <input name="id" id="id" value="" hidden>
                    <input name="info" value="personal" hidden>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="name"> Name</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('name')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input id="name" name="name" placeholder="Name" class="form-control"  type="text" required>
                                @include('errors.form',['field' => 'name'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="student_id">UIU ID</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('student_id')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="fa fa-id-card-o"></i></span>
                                <input id="student_id" name="student_id" placeholder="UIU ID" class="form-control"  type="number" required>
                                @include('errors.form',['field' => 'student_id'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-4 control-label" for="gender"> Gender</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group  {{ $errors->has('gender')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-plus-sign"></i></span>
                                <select id="gender" class="form-control" name="gender" required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                @include('errors.form',['field' => 'gender'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="bday"> Date Of Birth</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('bday')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                <input class="form-control" type="date" name="bday">
                                @include('errors.form',['field' => 'bday'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('blood')?'has_error':'' }}">
                        <label class="col-md-4 control-label" for="blood">Blood Group</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-tint"></i></span>
                                <select id="blood" class="form-control" name="blood">
                                    <option value="A(+VE)">A(+VE)</option>
                                    <option value="A(-VE)">A(-VE)</option>
                                    <option value="AB(+VE)">AB(+VE)</option>
                                    <option value="AB(-VE)">AB(-VE)</option>
                                    <option value="B(+VE)">B(+VE)</option>
                                    <option value="B(-VE)">B(-VE)</option>
                                    <option value="O(+VE)">O(+VE)</option>
                                    <option value="O(-VE)">O(-VE)</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                                @include('errors.form',['field' => 'date'])
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


