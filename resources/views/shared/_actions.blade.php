@can('edit_'.$entity)
    <a href="{{ route($entity.'.edit', [str_singular($entity) => $id])  }}" class="btn btn-xs btn-info">
        <i class="fa fa-edit"></i> Edit</a>
@endcan
<br>
@can('delete_'.$entity)
    {!! Form::open( ['method' => 'delete', 'url' => route($entity.'.destroy', ['user' => $id]), 'style' => 'display: inline', 'onSubmit' => 'return confirm("Are you sure want to delete it?")']) !!}
    <button type="submit" class="btn-delete btn btn-xs btn-danger ">
        <i class="glyphicon glyphicon-trash"></i>
    </button>
    {!! Form::close() !!}
@endcan
