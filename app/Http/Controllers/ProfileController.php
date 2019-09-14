<?php

namespace App\Http\Controllers;
use App\Authorizable;
use App\Model\User;
use Illuminate\Support\Facades\Auth;
use App\Profile;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;




class ProfileController extends Controller
{

    protected $info_mapping = [
        'work' => 'work',
        'education' => 'education',
        'contact' => 'contact',
        'personal' => 'personal'

    ];

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
       $profile = Auth::user()->profile->information;
        return view('home')->with(['profile' => $profile]);
    }


    public function create()
    {
        return view('profile.imageUpload');
    }

    public function imageCrop(Request $request){

        $extension = $request->file('image')->getClientOriginalExtension();
        $dir = 'news/';
        $filename = uniqid() . '_' . time() . '.' . $extension;
        $request->file('image')->move($dir, $filename);
        return $filename;


    }
        public function show()
        {


        }
        public function store(Request $request)
        {

        $type = $request->get('info');
        $name = $request->get('name');
        if (isset($name))
        {
            $user = Auth::user();
            $user->name = $request->get('name');
            $user ->student_id = $request->get('student_id');
            $user->save();
        }


        if (!isset($this->info_mapping[$type])) {
            return response()->json([
                'error'   => true,
                'message' => "Type is invalid",
            ]);
        }
        $form_data = $request->except('name','_token','student_id');
        $profile = auth()->user()->profile;
        $data = [];
        $existing_data = [];
        if (isset($profile->information)) {
            $data = $profile->information;
        }
        if (isset($data[$this->info_mapping[$type]]))
        {
            $existing_data = $data[$this->info_mapping[$type]];
            $form_data['id'] = Uuid::uuid1();
            $existing_data[] = $form_data;

        }

        $data[$this->info_mapping[$type]] = $existing_data;
        $profile->information = $data;
        $profile->save();
        return redirect()->back();

    }



    public function update(Request $request)
    {
        $type = $request->get('info');
        $name = $request->get('name');
        $student_id = $request->get('student_id');

        if (isset($name) or isset($student_id))
        {
            $user = Auth::user();
            $user->name = $request->get('name');
            $user ->student_id = $request->get('student_id');
            $user->save();
        }


        if (!isset($this->info_mapping[$type])) {
            return response()->json([
                'error' => true,
                'message' => "Type is invalid",
            ]);
        }
        $existing_data = [];
        $form_data = $request -> except('_method','_token');
        $id = $request->get('id');
        $profile = Auth::user()->profile;


        if (isset($profile->information))
        {
            $existing_data = $profile->information;
        }

        if($type == 'education')
        {
            foreach ($profile->information['education'] as $index => $education )
            {
                if ($education['id'] == $id)
                {
                    $existing_data['education'][$index] = $form_data;
                    $profile->information = $existing_data;
                    $profile->save();
                    break;

                }
            }
        }

        elseif($type == 'work')
        {
            foreach ($profile->information['work'] as $index => $work )
            {
                if ($work['id'] == $id)
                {
                    $existing_data['work'][$index] = $form_data;
                    $profile->information = $existing_data;
                    $profile->save();
                    break;

                }
            }
        }

        elseif($type == 'personal')
        {
            foreach ($profile->information['personal'] as $index => $personal )
            {

                    $existing_data['personal'][$index] = $form_data;
                    $profile->information = $existing_data;
                    $profile->save();
                    break;


            }
        }

        elseif($type == 'contact')
        {
            foreach ($profile->information['contact'] as $index => $contact )
            {

                    $existing_data['contact'][$index] = $form_data;
                    $profile->information = $existing_data;
                    $profile->save();
                    break;


            }
        }
        return back();
    }



    public function destroy(Request $request)
    {

          return $request;
       return $id= $request['id'];

        $data = Auth::user()->profile;
        $information = $data->information;
        foreach($information['education'] as $key=>$education)

        {
            if($education['id']= $id){
                unset($information['education'][$key]);
            }

        }
        return back();
        // return $request;
        // return $temp;


    }
}
