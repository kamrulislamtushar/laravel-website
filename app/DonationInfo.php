<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DonationInfo extends Model
{
    protected  $fillable = [
        'tran_id',
        'status',
        'val_id',
        'amount',
        'store_amount',
        'card_type',
        'card_no',
        'bank_tran_id',
        'card_issuer',
        'tran_date',
        'card_brand'

    ];
    public function donation(){
        return $this->belongsTo(DonationInfo::class);
    }

    public function donationDataStore($request)
    {
      return $donationInfo = DonationInfo::create([
            "tran_id" => $request->tran_id,
            "status" => $request->status,
            "val_id" => $request-> val_id,
            "amount" => $request->amount,
            "store_amount" => $request->store_amount,
            "card_type" => $request->card_type,
            "card_no" => $request->card_no,
            "bank_tran_id" => $request->bank_tran_id,
            "card_issuer" => $request->card_issuer,
            "tran_date" => $request->tran_date,
            "card_brand" => $request->card_brand
        ]);
    }
}
