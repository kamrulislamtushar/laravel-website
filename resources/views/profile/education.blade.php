<div class="tab-pane" id="tab_default_2">
    <div class="well well-sm">
        <h4>EDUCATIONAL BACKGROUND</h4>
            <button type="button" class="btn btn-primary btn-sm float-right" data-toggle="modal" data-target="#educationData">
                <i class="glyphicon glyphicon-plus"></i></span> ADD
            </button>
    </div>

    @foreach($profile['education'] as  $index => $education)
    <table class="table bio-table">
            <form action="{{ route('home.destroy', $education) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn-danger margin-left float-right"> <i class="glyphicon glyphicon-trash"></i></button>
            </form>

        <a href="" type="button" class=" btn-primary float-right" data-edu_type = "{{$education['edu_type']}}"
           data-institute = "{{$education['institute']}}" data-graduation = "{{$education['graduation']}}"
           data-id = "{{$education['id']}}"
           data-toggle="modal" data-target="#educationDataEdit">
            <i class="glyphicon glyphicon-edit"></i></a>
        <tbody>
        <tr>
            <td><i class="glyphicon glyphicon-education"></i>  Type</td>
            <td>:  {{$education['edu_type']}}</td>
        </tr>

        <tr>
            <td><i class="glyphicon glyphicon-home"></i>  Institute</td>
            <td>: {{$education['institute']}}</td>
        </tr>
        <tr>
            <td><i class="glyphicon glyphicon-calendar"></i>  Year Graduated</td>
            <td>: {{$education['graduation']}}</td>
        </tr>
        </tbody>
    </table>
    @endforeach
</div>

<div class="modal fade" id="educationData" tabindex="-1" role="dialog"
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
                    Educational Information
                </h4>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                {{--Form Start--}}
                <form class=" form-horizontal" action="{{ route('home.store') }}" method="post"  id="contact_form">
                    @csrf
                    <fieldset>
                        <input name="info" value="education" hidden>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Education Type: SSC/HSC/BSC</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('edu_type')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-education"></i></span>
                                    <input  name="edu_type" placeholder="Education Type: SSC/HSC/BSC" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'edu_type'])
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Institute</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('institute')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                    <input  name="institute" placeholder="Institute" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'institute'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Graduation Year</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('graduation')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input  name="graduation" placeholder="Graduation Year" class="form-control"  type="number" required>
                                    @include('errors.form',['field' => 'graduation'])
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

<div class="modal fade" id="educationDataEdit" tabindex="-1" role="dialog"
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
                   Edit Educational Information
                </h4>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                <form class=" form-horizontal" action="{{ route('home.update','update') }}" method="post"  id="contact_form">
                    {{ method_field('patch') }}
                    @csrf
                    <fieldset>
                        <input name="info" value="education" hidden>
                        <input name="id" id="id" value="" hidden>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Education Type: SSC/HSC/BSC</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('edu_type')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-education"></i></span>
                                    <input id="edu_type"  name="edu_type" placeholder="Education Type: SSC/HSC/BSC" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'edu_type'])
                                </div>
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="col-md-4 control-label">Institute</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('institute')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                    <input id="institute" name="institute" placeholder="Institute" class="form-control"  type="text" required>
                                    @include('errors.form',['field' => 'institute'])
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Graduation Year</label>
                            <div class="col-md-6 inputGroupContainer">
                                <div class="input-group {{ $errors->has('graduation')?'has_error':'' }}">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    <input id="graduation" name="graduation" placeholder="Graduation Year" class="form-control"  type="number" required>
                                    @include('errors.form',['field' => 'graduation'])
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

