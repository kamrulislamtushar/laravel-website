<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

    <title> @yield('title') | {{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.ico" type="image/ico" />


    @yield('og-tags')

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome.min.css') }}" />
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/styles.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/meanmenu.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/magnific-popup.css') }}" media="all" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/nice-select.css') }}" media="all" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/js-offcanvas.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style-default.min.css') }}" media="all"/>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.6.3/css/all.css' integrity='sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/' crossorigin='anonymous'>
    <script src="https://cdn.rawgit.com/atatanasov/gijgo/master/dist/combined/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://cdn.rawgit.com/atatanasov/gijgo/master/dist/combined/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/profile.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel ="stylesheet" type="text/css" href="{{ asset('css/datatablecustom.css') }}"  media="all">
    <link rel ="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"  media="all">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/career.css') }}" media="all">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.theme.default.min.css') }}" media="all">
    <style>
        .result-set { margin-top: 1em }
    </style>
    <!-- for single page custom css -->
    @yield('css')

</head>
<body>
<div class="main-wrapper page">
    <!--Begin header wrapper-->
    @include('shared.header')
    <!--End header wrapper-->

    <div id="flash-msg">
        @include('flash::message')
    </div>
    @yield('content')

<!--End content wrapper-->
    <!--Begin footer wrapper-->
    @include('shared.footer')
    <!--End footer wrapper-->
</div>



<script>
    $(function () {
        // flash auto hide
        $('#flash-msg .alert').not('.alert-danger, .alert-important').delay(6000).slideUp(500);
    })
</script>
<script src="{{ asset('js/custom/pusher.min.js') }}"></script>
<script src="{{ asset('js/libs/jquery-2.2.4.min.js') }}"></script>
<script src="{{ asset('js/libs/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/libs/owl.carousel.min.js') }}"></script>
<script src="{{ asset('js/libs/jquery.meanmenu.js') }}"></script>
<script src="{{ asset('js/libs/jquery.syotimer.js') }}"></script>
<script src="{{ asset('js/libs/parallax.min.js') }}"></script>
<script src="{{ asset('js/libs/jquery.waypoints.min.js') }}"></script>
<script src="{{ asset('js/custom/main.js') }}"></script>
<script src="{{ asset('js/libs/modernizr.custom.js') }}"></script>
<script src="{{asset('js/croppic.min.js')}}"></script>
<script src= "{{ asset('js/custom/modaldata.js') }}"></script>
<script src= "{{ asset('js/custom/jquery3.js') }}"></script>
<script src="{{asset('js/custom/datatable.js')}}"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="{{asset('js/carous.js')}}"></script>
@yield('js')
<script>

     $(document).ready( function () {
        $('#alumniTable').DataTable({
            "processing": true,
            "serverSide": true,
            "responsive":true,
            "ajax": "{{ route('alumni-members') }}",
            columns: [
                { data: 'id' , name: 'id'},
                { data: 'name' , name: 'name'},
                {data: 'namelink', name: 'namelink', orderable: false, searchable:
                        true}

            ]
        });
         $(".speakers .owl-carousel").owlCarousel();
    });
</script>
<script>

</script>
</body>
</html>
