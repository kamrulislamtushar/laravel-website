<?php

namespace App\Http\Controllers;
use App\Model\User;
use App\Profile;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use App\Imports\UsersImport;
ini_set('memory_limit', '3000M');
ini_set('max_execution_time', '300');
use App\Exports\StudentExport;

class CSVController extends Controller
{
    public function index()
    {
        return view('import');
    }

    public  function  import(Request $request)
    {
        Excel::import(new UsersImport,request()->file('file'));
        
        // Update
        $users = User::all();
        
        foreach ($users as $user) {
            if (!$user->profile) {
                Profile::create([
                    'user_id' => $user->id,
                    'information' => [
                        'work' => [],
                        'personal' => [],
                        'contact' => [],
                        'education' => []
                    ]
                ]);
            }
           
        }
        
        return back();
    }

    public function export() {

        return Excel::download(new StudentExport, 'career_fair_applicants.csv');

    }
}
