<div class="tab-pane" id="tab_default_4">

    <div class="well well-sm">
        <h4>OFFICIAL AND PERSONAL CONTACTS</h4>
        @if(count($profile['contact'])<=0)
        <button type="button" class="btn btn-primary btn-sm float-right" data-toggle="modal" data-target="#contact">
            <i class="glyphicon glyphicon-plus"></i></span> ADD
        </button>
        @endif
    </div>
    @foreach ($profile['contact'] as $contact)
    <table class="table bio-table">
        <tbody>
                <a type="button" class=" float-right"
        data-mobile = "{{  $contact['mobile'] }}" data-email = "{{ $contact['email'] }}"
        data-facebook = "{{ $contact['facebook'] }}" data-linkedin="{{ $contact['linkedin'] }}"
        data-address = "{{ $contact['address'] }}" data-citizenship="{{ $contact['citizenship'] }}"
        data-toggle="modal" data-target="#contactEdit">
                <i class="glyphicon glyphicon-edit"></i></span>
        </a>

        <tr>

            <td><i class="glyphicon glyphicon-earphone"></i>  Phone</td>
            <td>:  {{ $contact['mobile']}}</td>

        </tr>
        <tr>

            <td><i class="glyphicon glyphicon-envelope"></i>  Email</td>
            <td>:  {{ $contact['email']}}</td>

        </tr>
        <tr>

            <td><i class='fab fa-facebook'></i>  Facebook </td>
            <td>:  <a href="{{ $contact['facebook']}}">{{ $contact['facebook']}}</a></td>

        </tr>
        <tr>

            <td><i class="fa fa-linkedin"></i>  Linked</td>
            <td>:  <a href="{{ $contact['linkedin'] }}">{{ $contact['linkedin'] }}</a></td>

        </tr>
        <tr>

            <td><i class="glyphicon glyphicon-home"></i>  Address</td>
            <td>:  {{  $contact['address'] }}</td>

        </tr>
        <tr>

            <td><i class="	glyphicon glyphicon-map-marker"></i>  Citizenship</td>
            <td>:  {{ $contact['citizenship'] }}</td>

        </tr>

        </tbody>
    </table>
    @endforeach
</div>


<div class="modal fade" id="contact" tabindex="-1" role="dialog"
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
                    Contact Information
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form" action="{{route('home.store')}}" method="post">
                    @csrf
                    <input name="info" value="contact" hidden>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="mobile">Mobile NO</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('mobile')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                                <input  name="mobile" placeholder="Mobile Number" class="form-control"  type="number" required>
                                @include('errors.form',['field' => 'Mobile'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="email">Personal Email Address:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('email')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input  name="email" placeholder="Personal Email Address" class="form-control"  type="email" required>
                                @include('errors.form',['field' => 'email'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="facebook">Facebook Id:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('facebook')?'has_error':'' }}">
                                <span class="input-group-addon"><i class='fab fa-facebook'></i></span>
                                <input  name="facebook" placeholder="Facebook ID (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'facebook'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="facebook">Linked In Profile:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('linkedin')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="fa fa-linkedin"></i></span>
                                <input  name="linkedin" placeholder="LinkedIn (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'linkedin'])
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="address">Address</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('address')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                <input  name="address" placeholder="Address (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'address'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="citizenship">Citizenship</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('citizenship')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="	glyphicon glyphicon-map-marker"></i></span>
                                <input  name="citizenship" placeholder="Citizenship " class="form-control"  type="text">
                                @include('errors.form',['field' => 'citizenship'])
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

<div class="modal fade" id="contactEdit" tabindex="-1" role="dialog"
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
                    Contact Information
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form" action="{{route('home.update','update')}}" method="post">
                    @csrf
                    {{ method_field('patch') }}
                    <input name="info" value="contact" hidden>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="mobile">Mobile NO</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('mobile')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                                <input id="mobile" name="mobile" placeholder="Mobile Number" class="form-control"  type="number" required>
                                @include('errors.form',['field' => 'Mobile'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="email">Personal Email Address:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('email')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input id="email" name="email" placeholder="Personal Email Address" class="form-control"  type="email" required>
                                @include('errors.form',['field' => 'email'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="facebook">Facebook Id:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('facebook')?'has_error':'' }}">
                                <span class="input-group-addon"><i class='fab fa-facebook'></i></span>
                                <input id="facebook"  name="facebook" placeholder="Facebook ID (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'facebook'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="facebook">Linked In Profile:</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('linkedin')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="fa fa-linkedin"></i></span>
                                <input id="linkedin" name="linkedin" placeholder="LinkedIn (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'linkedin'])
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="address">Address</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('address')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                <input id="address" name="address" placeholder="Address (Optional)" class="form-control"  type="text">
                                @include('errors.form',['field' => 'address'])
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="col-md-4 control-label" for="citizenship">Citizenship</label>
                        <div class="col-md-6 inputGroupContainer">
                            <div class="input-group {{ $errors->has('citizenship')?'has_error':'' }}">
                                <span class="input-group-addon"><i class="	glyphicon glyphicon-map-marker"></i></span>
                                <input id="citizenship"  name="citizenship" placeholder="Citizenship " class="form-control"  type="text">
                                @include('errors.form',['field' => 'citizenship'])
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

