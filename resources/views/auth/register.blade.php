@extends('layouts.theme')

@section('content')
    <div class="account-page register text-center">
        <div class="account-title">
            <h4 class="heading-light">REGISTER IN ALUMNI DASHBOARD</h4>
        </div>
        <div class="account-content">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="input-box fullname">
                    <input id="name" type="text" class="form-control" placeholder="Full Name" name="name" value="{{ old('name') }}" required autofocus>
                    @if ($errors->has('name'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                    @endif
                </div>
                <div class="input-box number">
                    <input id="student_id" type="text" class="form-control" placeholder="Student ID" name="student_id" value="{{ old('student_id') }}" required>
                    @if ($errors->has('student_id'))
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('student_id') }}</strong>
            </span>
                    @endif
                </div>
                <div class="input-box email">
                    <input id="email" type="text" class="form-control" placeholder="Email Address" name="email" value="{{ old('email') }}" required>
                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                    @endif
                </div>
                <div class="input-box password">
                    <input id="password" class="form-control" type="password" placeholder="Password" name="password" required>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                    @endif
                </div>
                <div class="input-box very-password">
                    <input id="password-confirm" class="form-control" type="password" placeholder="Verify Password" name="password_confirmation" required>
                </div>

                <div class="buttons-set">
                    <button type="submit" class="btn bnt bnt-theme text-regular text-uppercase">
                        {{ __('Register') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
