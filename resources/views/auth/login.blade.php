@extends('layouts.theme')

@section('title')
Login 
@endsection

@section('content')
<div class="account-page login text-center">
    <div class="account-title">
        <h4 class="heading-light">LOG IN INTO ALUMNI DASHBOARD</h4>
    </div>

    <div class="account-content">
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="input-box email">
                <div class="col-md-12">
                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus placeholder="Email Address">

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                    @endif
                </div>
            </div>

            <div class="input-box password">
                <div class="col-md-12">
                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="Password">

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                    @endif
                </div>
            </div>


            <div class="form-group row mb-0">
                <div class="col-md-12 ">

                    @if (Route::has('password.request'))
                        {{--<a class="btn btn-link" href="{{ route('password.request') }}">--}}
                            {{--{{ __('Forgot Your Password?') }}--}}
                        {{--</a>--}}
                    @endif

                    <button type="submit" class="bnt bnt-theme text-regular text-uppercase">
                        {{ __('Login') }}
                    </button>
                </div>
            </div>
            {{--<div class="form-group row">--}}
                {{--<div class="col-md-12 offset-md-4">--}}
                    {{--<div class="form-check">--}}
                        {{--<input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>--}}

                        {{--<label class="form-check-label" for="remember">--}}
                            {{--{{ __('Remember Me') }}--}}
                        {{--</label>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        </form>
    </div>
</div>
@endsection
