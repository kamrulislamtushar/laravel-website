<div class="tab-pane" id="tab_default_3">
    <div class="well well-sm">
        <h4>EMPLOYMENT RECORD</h4>
        <button type="button" class="btn btn-primary btn-sm float-right" data-toggle="modal" data-target="#workData">
            <i class="glyphicon glyphicon-plus"></i></span> ADD
        </button>
    </div>
    @foreach($profile['work'] as $work)
    <table class="table bio-table">
        <a href="" type="button" class="btn-danger float-right margin-left" >
            <i class="glyphicon glyphicon-trash"></i>
        </a>
        <a href="" type="button" class=" btn-primary float-right"
           data-designation = "{{$work['designation']}}" data-responsibilities = "{{$work['responsibilities']}}"
           data-id = "{{$work['id']}}"  data-company = "{{$work['company']}}"
           data-toggle="modal" data-target="#workDataEdit">
            <i class="glyphicon glyphicon-edit"></i>
        </a>
        <tbody>
        <tr>
            <td><i class="glyphicon glyphicon-briefcase"></i>  Position</td>
            <td>: {{$work['designation']}}</td>
        </tr>
        <tr>
            <td><i class="glyphicon glyphicon-home"></i>  Company/Organization</td>
            <td>: {{$work['company']}}</td>
        </tr>
        <tr>
            <td><i class="glyphicon glyphicon-calendar"></i>  From</td>
            <td>:  {{$work['working_from']}}</td>
        </tr>
        <tr>
            <td><i class="glyphicon glyphicon-calendar"></i>  To</td>
            <td>:  {{$work['working_to']}}</td>
        </tr>

        <tr>
            <td><i class="glyphicon glyphicon-list-alt"></i>  Principle Activities</td>
            <td>: {{$work['responsibilities']}}</td>
        </tr>
        </tbody>
    </table>
    @endforeach

    <br/>
</div>

<div class="modal fade" id="workData" tabindex="-1" role="dialog"
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
                    Employment Record
                </h4>
            </div>

            <div class="modal-body">
                <form class=" form-horizontal" action=" {{ route('home.store') }}" method="post"  id="contact_form">
                    @csrf
                    <fieldset>
                        <input name="info" value="work" hidden>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Designation</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('designation')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-briefcase"></i></span>
                                    <input  name="designation" placeholder="Designation" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'designation'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Company/Institute</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('company')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                    <input  name="company" placeholder="Company/Institute" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'company'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group ">
                            <label class="col-md-4 control-label" for="working_from"> From</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('working_from')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input class="form-control" type="date" name="working_from">
                                    @include('errors.form',['field' => 'working_from'])
                                </div>
                            </div>
                        </div>


                        <div class="form-group ">
                            <label class="col-md-4 control-label"></label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group checkbox-inline {{ $errors->has('working_here')?'has_error':'' }}">
                                        <input type="checkbox" class="form-check-input" value="Currently Working Here" id="working_here">
                                        <label class="form-check-label" for="working_here">  I Currently Work Here</label>
                                    @include('errors.form',['field' => 'working_here'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group ">
                            <label class="col-md-4 control-label" for="working_to"> To</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('working_to')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input class="form-control" type="date" name="working_to">
                                    @include('errors.form',['field' => 'working_to'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Responsibilities</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('responsibilities')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea class="form-control" id="editor" placeholder="Responsibilities"   name="responsibilities"></textarea>
                                    @include('errors.form',['field' => 'responsibilities'])
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
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="workDataEdit" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close"
                        data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Employment Record Update
                </h4>
            </div>
            <div class="modal-body">
                <form class=" form-horizontal" action=" {{ route('home.update','update') }}" method="post"  id="contact_form">
                    {{method_field('patch')}}
                    @csrf
                        <input name="info" value="work" hidden>
                        <input name="id" id="id" value="" hidden>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Designation</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('designation')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-briefcase"></i></span>
                                    <input id="designation"  name="designation" placeholder="Designation" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'designation'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Company/Institute</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('company')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                    <input id="company"  name="company" placeholder="Company/Institute" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'company'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group ">
                            <label class="col-md-4 control-label" for="working_from"> From</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('working_from')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input class="form-control" type="date" name="working_from">
                                    @include('errors.form',['field' => 'working_from'])
                                </div>
                            </div>
                        </div>


                        <div class="form-group ">
                            <label class="col-md-4 control-label"></label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group checkbox-inline {{ $errors->has('working_here')?'has_error':'' }}">
                                    <input type="checkbox" class="form-check-input" value="Currently Working Here" id="working_here">
                                    <label class="form-check-label" for="working_here">  I Currently Work Here</label>
                                    @include('errors.form',['field' => 'working_here'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group ">
                            <label class="col-md-4 control-label" for="working_to"> To</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('working_to')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input class="form-control" type="date" name="working_to">
                                    @include('errors.form',['field' => 'working_to'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Responsibilities</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('responsibilities')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea class="form-control" id="responsibilities" placeholder="Responsibilities"   name="responsibilities"></textarea>
                                    @include('errors.form',['field' => 'responsibilities'])
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


