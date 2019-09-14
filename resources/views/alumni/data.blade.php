@foreach($user as $row)
<tr>
 <td>{{ $row->id}}</td>
 <td>{{ $row->student_id }}</td>
 <td>{{ $row->name }}</td>
 <td>{{ $row->email }}</td>
</tr>
@endforeach
<tr>
 <td colspan="3" align="center">
  {!! $user->links() !!}
 </td>
</tr>
