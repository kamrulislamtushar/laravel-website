<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonationInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donation_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tran_id');
            $table->string('status');
            $table->string('val_id');
            $table->double('amount');
            $table->double('store_amount');
            $table->string('card_type')->nullable();
            $table->string('card_no')->nullable();
            $table->string('bank_tran_id')->nullable();
            $table->string('card_issuer')->nullable();
            $table->string('tran_date');
            $table->string('card_brand')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donation_infos');
    }
}
