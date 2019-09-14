@extends('layouts.theme')
@section('content')
 <div class="container">
   <div class="row">
     <div class="sms-form">
       <form action="http://sms.sslwireless.com/pushapi/dynamic/server.php" method="POST">
         <input type="hidden" value="USER NAME" name="user"/>
         <input type="hidden" value="PASSWORD" name="pass"/>
         <input type="hidden" value="STAKEHOLDER" name="sid"/>

         <input type="hidden" value="8801913900620" name="sms[0][0]" />
         <input type="hidden" value="Test SMS One" name="sms[0][1]" />
         <input type="hidden" value="123456789" name="sms[0][2]" />

          <!-- <input type="hidden" value="8801913900620" name="sms[1][0]" />
          <input type="hidden" value="Test SMS Two" name="sms[1][1]" />
          <input type="hidden" value="123456790" name="sms[1][2]" /> -->
          <input type="submit"/>
       </form>
     </div>
   </div>
 </div>
@endsection