<div class="tab-pane active" id="tab_default_1">
        <div class="well well-sm">
            <h4 >PERSONAL DATA</h4>
        </div>
        <table class="table bio-table">
            <tbody>
            <tr>
                <td><i class="glyphicon glyphicon-user"></i>  Name</td>
                <td>: {{$user->name}}</td>
            </tr>
            <tr>
                <td><i class="fa fa-id-card-o"></i>  UIU ID</td>
                <td>:   {{$user->student_id}}</td>
            </tr>
            @foreach($user->profile['information']['personal'] as $personal)
            <tr>
                <td><i class="glyphicon glyphicon-plus-sign"></i>  Gender</td>
                <td>:   {{$personal['gender']}}</td>
            </tr>
            <tr>
                <td><i class="glyphicon glyphicon-tint"></i>  Blood Group</td>
                <td>:{{$personal['blood']}}</td>
            </tr>
            <tr>
                <td><i class="glyphicon glyphicon-calendar"></i>  Date of Birth</td>
                <td>: {{ \Carbon\Carbon::parse($personal['bday'])->format('d-M-Y')}}</td>
                {{--<td>:{{$personal['bday']}}</td>--}}
            </tr>
                @endforeach
            </tbody>
        </table>
    </div>
