@extends('layouts.theme')
@section('title')
    Payment History
@endsection
@section('content')
    <div class="container">
        <div class="row padding-content">
            <div class="col-md-2 col-lg-2">
                    @include('shared.app.sidebar')
            </div>
            <div class="col-md-10 col-lg-10">
                <hr>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Amount Paid</th>
                            <th>Amount Stored</th>
                            <th>Transaction Date</th>
                            <th>Registered For</th>
                            <th># Of Orphans</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach( $donations as $donation )
                            <tr>
                                <td>{{ $donation->name }}</td>
                                <td>{{ $donation->phone }}</td>
                                <td>{{ $donation->email }}</td>
                                <td>{{ $donation->tran_id }}</td>
                                <td>{{ $donation->amount }}</td>
                                <td>{{ $donation->store_amount }}</td>
                                <td>{{ $donation->tran_date }}</td>
                                <td>{{ $donation->num_people }}</td>
                                <td>{{ $donation->numberOfOrphans }}</td>
                                    <td>
                                        {!! Form::open( ['method' => 'delete', 'url' => route('delete-donation', $donation->tran_id ), 'style' => 'display: inline', 'onSubmit' => 'return confirm("Are you sure want to delete it?")']) !!}
                                        <button type="submit" class="btn-delete btn btn-xs btn-danger ">
                                            <i class="glyphicon glyphicon-trash"></i>
                                        </button>
                                        {!! Form::close() !!}
                                    </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <div class="text-center">
                    {{ $donations->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection
