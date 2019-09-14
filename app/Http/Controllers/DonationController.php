<?php

namespace App\Http\Controllers;

use App\Donation;
use App\DonationInfo;
use App\Mail\InvoiceMail;
use Config;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class DonationController extends Controller
{


    public function index()
    {
       $donations = DB::table('donations')
            ->join('donation_infos', 'donations.transaction_id', '=', 'donation_infos.tran_id')
            ->orderBy('tran_date', 'DESC')
            ->paginate(10);
        return view('donation.list', compact('donations'));
    }

    public function destroy( $transaction_id)
    {

        $donation = Donation::where('transaction_id', $transaction_id)->first();
        $donationinfo= DonationInfo::where('tran_id',$transaction_id)->first();
        $donationinfo->delete();
        $donation->delete();
        session()->flash('success','Data deleted successfully');
        return redirect()->back();
    }

    public function contribution()
    {
        return view('donation.create');
    }

    public function iftar()
    {
        return view('donation.iftarDonation');
    }

    public function payment(Request $request)
    {

        $this->validate($request, [
            'name'     => 'required|string',
            'email'    => 'required',
            'phone'    => 'required',
            'donation' => 'required|integer',
        ]);
        $num_people = 0;
        $num_orphans =0;
        if ($request->get('numberOfPeople')) {
            $num_people = $request->get('numberOfPeople');
        }
        if ($request->get('orphans')) {
            $num_orphans = $request->get('orphans');
        }
         session([
            'donor' => [
                'name'           => $request->get('name'),
                'email'          => $request->get('email'),
                'phone'          => $request->get('phone'),
                'donation'       => $request->get('donation'),
                'transaction_id' => $request->get('transaction_id'),
                'num_people'     => $num_people,
                'numberOfOrphans' => $num_orphans
            ],
        ]);

        $client = new Client();
        $trans_id = mt_rand(1000000000, 9999999999);
        $res = $client->request('POST', config('payment.payment_url'), [
            'form_params' => [
                'store_id'     => config('payment.store_id'),
                'store_passwd' => config('payment.store_passwd'),
                'total_amount' => $request->get('donation'),
                'currency'     => 'BDT',
                'tran_id'      => $trans_id,
                'cus_name'     => $request->name,
                'cus_email'    => $request->email,
                'cus_phone'    => $request->phone,
                'success_url'  => config('app.url') . '/contribution/success',
                'fail_url'     => config('app.url') . '/contribution/failed',
                'cancel_url'   => config('app.url') . '/contribution/cancel',
            ],
        ]);


        $response = json_decode($res->getBody(), true);

        return redirect($response['GatewayPageURL']);
    }

    public function storeDonor(Request $request)
    {

        $response = $this->validatePayment($request);
        $res_data = json_decode($response, true);
        if ($res_data['status'] == 'INVALID_TRANSACTION')
        {
            return redirect()->back();
        }
        $donor = session('donor');
        $donation = new Donation();
        $payment = $donation->donationStore($donor, $request->tran_id);
        $donationInfo = new DonationInfo();
        $donationInfo->donationDataStore($request);
        $this->sendNotifications($payment);
        $request->session()->forget('donor');
        return view('donation.success');
    }

    private function _sendSms($payment)
    {
        $user = config("message.sms_user");
        $pass = config("message.sms_pass");
        $sid = config("message.sms_sid");
        $url = "http://sms.sslwireless.com/pushapi/dynamic/server.php";
        $client = new Client();
        $response = $client->request('POST', $url, [
            'form_params' => [
                'user' => $user,
                'pass' => $pass,
                'sid'  => $sid,
                'sms'  => [
                    [$payment->phone, "Your Payment has been received. We thank you for your contribution."],
                ],
            ],
        ]);

        return $response->getBody();
    }

    public function validatePayment($request){

        $val_id = $request->get('val_id');
        $store_id = config('payment.store_id');
        $store_passwd = config('payment.store_passwd');
        $url = config('payment.validation_url') . "?val_id=" . $val_id . "&store_id=" . $store_id . "&store_passwd=" . $store_passwd . "&v=1&format=json";
        
        $client = new Client();
        $res = $client->request('GET', $url);
        return $res->getBody();
    }

    public function sendNotifications($payment){
        $phone = $payment->phone;
        $checked_digit = substr($phone, 0, 3);
        if ($checked_digit == '+88') {
            $payment->phone = ltrim($phone, '+');
        } else {
            if ($checked_digit == '880') {
                $payment->phone = $phone;
            } else {
                $payment->phone = '88' . $phone;
            }
        }
        Mail::to($payment->email)->send(new InvoiceMail($payment));
        $this->_sendSms($payment);
    }
}
