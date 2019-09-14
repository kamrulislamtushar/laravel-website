<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsInSomeTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stories', function (Blueprint $table) {
            $table->text('slug')->nullable();
            $table->text('teaser')->nullable();
        });
    
        Schema::table('news', function (Blueprint $table) {
            $table->text('slug')->nullable();
            $table->text('teaser')->nullable();
        });
        
        Schema::table('events', function (Blueprint $table) {
            $table->text('slug')->nullable();
            $table->text('teaser')->nullable();
        });
        
        Schema::table('sliders', function (Blueprint $table) {
            $table->text('link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stories', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('teaser');
        });
    
        Schema::table('news', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    
        Schema::table('sliders', function (Blueprint $table) {
            $table->dropColumn('link');
        });
    }
}
