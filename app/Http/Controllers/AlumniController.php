<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use App\Profile;
use Yajra\DataTables\DataTables;

class AlumniController extends Controller
{
    public function index()
    {
        return view('alumni.list');
    }

    public function show( User $user)
    {
        $id = $user->id;
        $user = User::with('profile')
            ->where('id',$id)->first();
        return view('alumni.profile.main',compact('user'));

    }

    public function getUsers()
    {

        return Datatables::of(User::query())
            ->addColumn('namelink', function ($user) {
                return '<a href="' . route('alumni-member.show', $user->id) .'">View Profile</a>';
            })
            ->rawColumns(['namelink'])
            ->make(true);
    }
}
