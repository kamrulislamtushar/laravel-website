@extends('layouts.theme')
@section('title')
    UIU CSE Ramadan Get Together 2019
@endsection
@section('og-tags')
    <meta property="og:url"                content="{{route('iftar')}}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="UIU CSE Ramadan Get Together 2019 Registration For Alumni Members" />
    <meta property="og:image"              content="{{asset('images/CSE-iftar.png')}}" />
    <meta property="og:description"        content="The CSE department of UIU has given its consent to arrange a Get Together  this Ramadan for all of its current and Ex-students and of course the faculty members! The get together is extended to a short interaction and Iftar with the full UIU CSE family. The get together is organized by UIU Computer Club, UIU CSE Alumni Association & hosted by Dept. of CSE, UIU.  Like the previous time, we strongly believe that all of us will make this get together memorable by our gigantic participation. This time it is going to be bigger than ever. Guests are also allowed with the contribution.
" />
@endsection
@section('content')
    <div class="donation">
        <div class="container">
            <h1 class="text-center">UIU CSE Ramadan Get Together 2019</h1>
            @if(Session::has('success'))
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        <ul>
                            <li class="alert alert-success">{{ Session::get('success') }}</li>
                        </ul>
                    </div>
                </div>
            @endif

            @if(count($errors)>0)
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li class="alert alert-danger">{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>

            @endif
            <div class="row mt-20">
                <div class="col-lg-5">
                    <h2>Participation Fee: <span class="text-bold">350 BDT</span></h2>
                    <hr>

                    <h2 class="text-bold mb-10">Sponsor an IFTAR for Orphan.</h2>
                    <h3 class="text-regular mt-20">Support us to buy an IFTAR for an orphan, who will be with us on that day :). Each iftar for an orphan will cost you 350 BDT only.</h3>
                </div>
                <div class="col-lg-5">
                    <form action="/create-contribution" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="name">Enter your name <span class="required color-red"> *</span></label>
                            <input required type="text" name="name" class="form-control" placeholder="Enter your name">
                        </div>

                        <div class="form-group">
                            <label for="name">Enter your email<span class="required color-red"> *</span></label>
                            <input required type="text" name="email" class="form-control" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="name">Enter your phone<span class="required color-red"> *</span></label>
                            <input required type="text" name="phone" class="form-control" placeholder="Enter your phone">
                        </div>
                        <div class="form-group">
                            <label for="name">How many number of people you are registering for?<span class="required color-red"> *</span></label>
                            <input id="numberOfPeople" onkeyup="calculateTotal()" required type="number" value="0" name="numberOfPeople" class="form-control" placeholder="How many number of people you are registering for?">
                        </div>

                        <div class="form-group">
                            <label for="name">For how many orphans you want to contribute?</label>
                            <input id="orphans" onkeyup="calculateTotal()"  type="number"  name="orphans" class="form-control" placeholder="How many number of orphans you want to contribute?">
                        </div>

                        <div class="form-group">
                            <label for="donation">You'll have to pay BDT</label>
                            <input readonly required type="number" id="payment_amount" name="donation" class="form-control" value="0" placeholder="You'll have to pay BDT">
                        </div>

                        <div class="form-group account-content">
                            <button type="submit" class="bnt bnt-theme text-regular text-uppercase">Contribute</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script>
        function calculateTotal(){
                var alumni = $('#numberOfPeople').val() * 350;
                var orphans = $('#orphans').val() * 350;
                var payment = alumni+orphans;
                $('#payment_amount').val(payment)
        }
    </script>

@endsection


