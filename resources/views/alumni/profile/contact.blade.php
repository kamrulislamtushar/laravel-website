<div class="tab-pane" id="tab_default_4">

        <div class="well well-sm">
            <h4>OFFICIAL AND PERSONAL CONTACTS</h4>
        </div>
        <table class="table bio-table">
            @foreach($user->profile['information']['contact'] as $contact)
            <tbody>
            <tr>
                <td><i class="glyphicon glyphicon-earphone"></i>  Phone</td>
                <td>: {{$contact['mobile']}}</td>
            </tr>
            <tr>
                <td><i class="glyphicon glyphicon-envelope"></i>  Email</td>
                <td>:  {{$contact['email']}}</td>
            </tr>
            <tr>
                <td><i class='fab fa-facebook'></i>  Facebook </td>
                <td>:  <a href="{{$contact['facebook']}}">{{$contact['facebook']}}</a></td>
            </tr>
            <tr>
                <td><i class="fa fa-linkedin"></i>  Linked</td>
                <td>:  <a href="{{$contact['linkedin']}}">{{$contact['linkedin']}}</a></td>
            </tr>
            <tr>
                <td><i class="glyphicon glyphicon-home"></i>  Address</td>
                <td>: {{$contact['address']}} </td>
            </tr>
            <tr>
                <td><i class="	glyphicon glyphicon-map-marker"></i>  Citizenship</td>
                <td>:  {{$contact['citizenship']}}</td>
            </tr>
            </tbody>
                @endforeach
        </table>
    </div>





