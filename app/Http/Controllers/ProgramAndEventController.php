<?php
namespace App\Http\Controllers;
use App\Model\News;
use App\Model\Event;
use function Sodium\add;
use Carbon\Carbon;

use Illuminate\Http\Request;

class ProgramAndEventController extends Controller
{
    public function index()
    {

        $allEvents = Event::where('status',1)->orderBy('date','desc')->get();
        $latestEvent = $allEvents->first();
        return view('program',compact('allEvents','latestEvent'));
    }
}
