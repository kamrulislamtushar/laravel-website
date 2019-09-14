<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProgramAndEventController;
use App\Http\Controllers\AllNewsController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\StoryPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AlumniController;
use  Illuminate\Support\Facades\Request;
use App\Http\Controllers\CSVController;
Route::get('about', function()
{
    return View::make('about');
})->name('about-us');

Route::get('committee', function()
{
    return View::make('committee');
})->name('committee');


Auth::routes(['verify' => true]);

Route::get('/','WelcomeController@index');
Route::get('/news','AllNewsController@index')->name('all-news');
Route::get('/programs','ProgramAndEventController@index')->name('all-programs');

Route::get('/stories','StoryPageController@index')->name('alumni-stories');
Route::get('/story/{slug}', 'StoryPageController@show')->name('story-details');


Route::get('/event/{slug}', [
    'as' => 'event-details', 'uses' => 'EventsController@view'
]);
Route::get('/news/{slug}', [
    'as' => 'news-details', 'uses' => 'NewsController@view'
]);
Route::get('import-view', 'CSVController@index');
Route::post('import', 'CSVController@import')->name('import');
Route::get('addpicture', 'ProfileController@create')->name('addpicture');
Route::post('/addpicture', 'ProfileController@imageCrop')->name('uploadphoto');
Route::get('/alumni-members', 'AlumniController@index')->name('alumni');
Route::get('users','AlumniController@getUsers')->name('alumni-members');
Route::get('/member/{user}','AlumniController@show')->name('alumni-member.show');
Route::resource('/home', 'ProfileController')->except('destroy');
Route::delete('home/{id}', 'ProfileController@destroy')->name('home.destroy');

// Admin routes
Route::prefix('admin')->middleware('role:Admin')->group(function() {
    Route::resource('/events', 'EventsController');
    Route::resource('/news', 'NewsController');
    Route::resource('/sliders', 'SliderController')
    ->except('create','show','edit');
    Route::resource('/pages','PagesController');
    Route::resource('/stories','StoryController');
    Route::resource('/users', 'UserController');
    Route::resource('/roles', 'RoleController');
    Route::get('/payment-history','DonationController@index' )->name('donation-list');
    Route::delete('/delete-donation/{tran_id}', 'DonationController@destroy')->name('delete-donation');

    //student  routes for admin access
    Route::get('/registered-student-list', 'StudentController@index')->name('show');
    Route::get('/student/delete/{id}',[ 
      'uses' => 'StudentController@delete',
      'as' => 'student.delete'
    ]);
});

Route::get('/apply-for-job-fair', 'StudentController@create')->name('apply-for-job-fair');
Route::post('/create/registration',[
  'uses' => 'StudentController@store' 
  ]);

// Donation Route
Route::get('/contribute-for-uiucseaa', [
  'uses' => 'DonationController@contribution'
]);

Route::get('uiu-cse-ramadan-get-together-registration-2019', 'DonationController@iftar')->name('iftar');
Route::post('/contribution/failed', function() {
  return view('donation.failed');
});

Route::post('/contribution/cancel', function() {
  return view('donation.cancel');
});

Route::post('/create-contribution',[
   'uses' => 'DonationController@payment'
]);
Route::post('/contribution/success',[
  'uses' => 'DonationController@storeDonor'
]);
Route::get('/uiu-it-career-fair-schedule' , 'PagesController@careerFair')->name('uiu-it-career-fair-schedule');
// Contact Message
Route::get('/contact-us', 'SendEmailController@index');
Route::post('/sendmail/send', 'SendEmailController@send');
Route::get('student-data-export', 'CSVController@export')->name('student-data-export');
