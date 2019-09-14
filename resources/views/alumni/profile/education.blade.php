<div class="tab-pane" id="tab_default_2">
    <div class="well well-sm">
        <h4>EDUCATIONAL BACKGROUND</h4>
    </div>


        <table class="table bio-table">
            @foreach($user->profile['information']['education'] as $education)
            <tbody>

            <tr>
                <td><i class="glyphicon glyphicon-education"></i>  Type</td>
                <td>:   {{$education['edu_type']}}</td>
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
            @endforeach
        </table>

</div>


