<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class SendEmailController extends Controller
{
   public function index(){
    return view('contact.create');
   }

   public function send(Request $request)
   {
     $this->validate($request, [
       'subject' => 'required',
       'email' => 'required|email',
       'message' => 'required'
     ]);
     $data = array(
       'email' => $request->email,
       'subject' => $request->subject,
       'message' => $request->message
     );
     Mail::to(env("CONTACT_MAIL", "contact@alumni.cse.uiu.ac.bd"))->send(new SendMail($data));
     return back()->with('success', 'Thanks for contacting us!');
   }
}
