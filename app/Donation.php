<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $fillable = [
        "name", "email", "phone", "donation", "num_people", "contribution_for", "transaction_id" , "numberOfOrphans"
    ];
    public function donationInformation()
    {
        return $this->hasOne(Donation::class);
    }

    public function donationStore($donor, $tran_id)
    {
        return $donation = Donation::create([
            "name" => $donor['name'],
            "email" => $donor['email'],
            "phone" => $donor['phone'],
            "donation" => $donor['donation'],
            "num_people" => $donor['num_people'],
            "contribution_for" => 'iftar',
            "numberOfOrphans" => $donor['numberOfOrphans'],
            "transaction_id" => $tran_id,

        ]);
    }
}
