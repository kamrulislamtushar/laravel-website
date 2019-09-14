<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
use App\Http\Requests\StudentRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel;

class StudentController extends Controller
{
    public function create() {
      return view('student.create');
    }

    public function index(Request $request) {
    
      $query = $request->get('search');

      if($query)
      {
        // if(is_int($query) && $query < 5) // is_int($query) && strlen($query)>4
        // {
        //   $students = Student::where('cgpa','like', $query.'%')->paginate(10);
        //   return view('student.index', compact('students'));
        // }
        $students = Student::where('email', 'like',  $query.'%')
        ->orWhere('name', 'like', '%' .$query.'%')
        ->orWhere('expertise', 'like', '%' .$query.'%')
        ->orWhere('student_id' , 'like','%'. $query.'%')
        ->orderBy('cgpa', 'DESC')
        ->paginate(10);
        $students->appends(['search' => $query]);

         return view('student.index', compact('students'));
      }
      $students = Student::orderBy('cgpa', 'DESC')
      ->paginate(10);
      return view('student.index', compact('students'));
  }
    public function delete($id){
      $student = Student::find($id);
      $student->delete();
      return redirect()->route('show');
   }

    public function store(Request $request) {
      $this->validate($request, [
        'name' => 'required|string',
        'student_id' => 'required|unique:students|min:9|max:9',
        'semester' => 'required',
        'cgpa' => 'required',
        'email' => 'required|unique:students',
        'mobile' => 'required|unique:students',
        'expertise' => 'required',
        'experience' => 'required',
        'cv' => 'required|mimes:pdf,doc,docx'
       ]);

        $cv = $request->hasFile('cv') ? Storage::disk('public')->put('cv', $request->file('cv')) : null;

        $student = new Student;
        $student->name = $request->name;
        $student->student_id = $request->student_id;
        $student->semester= $request->semester;
        $student->cgpa= $request->cgpa;
        $student->email= $request->email;
        $student->mobile= $request->mobile;
        $student->expertise= $request->expertise;
        $student->experience= $request->experience;
        $student->cv = $cv;
        $student->save();
        return redirect()->back()->with('success', 'Thanks for your application. We will contact with you soon!');
    }



}
