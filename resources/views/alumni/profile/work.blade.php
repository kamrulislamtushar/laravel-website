<div class="tab-pane" id="tab_default_3">
    <div class="well well-sm">
        <h4>EMPLOYMENT RECORD</h4>

    </div>
        <table class="table bio-table">
            @foreach($user->profile['information']['work'] as $work)
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
                <td>: {{ \Carbon\Carbon::parse($work['working_from'])->format('d-M-Y')}}</td>
            </tr>
            <tr>
                <td><i class="glyphicon glyphicon-calendar"></i>  To</td>
                <td>:  {{ \Carbon\Carbon::parse($work['working_to'])->format('d-M-Y')}}</td>
            </tr>

            <tr>
                <td><i class="glyphicon glyphicon-list-alt"></i>  Principle Activities</td>
                <td>: {{$work['responsibilities']}}</td>
            </tr>
            </tbody>
                @endforeach
        </table>
    <br/>
</div>


