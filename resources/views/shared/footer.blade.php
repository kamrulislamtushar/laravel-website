    <!--Begin footer wrapper-->
    <div class="footer-wrapper type2">
        <footer class="foooter-container">
            <div class="container">
                <div class="footer-middle">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12 animated footer-col">
                            <div class="contact-footer">
                                <div class="logo-footer">
                                    <a href="{{ url('/') }}"><img src="{{asset('images/logo.jpg')}}" style="height: 150px" alt=""></a>
                                </div>
                                <div class="contact-desc">
                                    <p class="text-light">SERVING WITH EXCELLENCE</p>
                                </div>
                                <div class="contact-phone-email pl-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="contact-phone"><a href="#">+8801779515401</a></span>
                                        </div>
                                        <div class="col-6">
                                            <span class="contact-phone"><a href="mailto:contact@alumni.cse.uiu.ac.bd">contact@alumni.cse.uiu.ac.bd</a></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12  col-xs-12 animated footer-col">
                            <div class="links-footer">
                                <div class="row">
                                    <div class="col-sm-3 col-xs-12">
                                        <h6 class="heading-bold">DASHBOARD</h6>
                                        <ul class="list-unstyled no-margin">
                                            @if (Auth::check())
                                                <li><a href="{{route('all-programs')}}">PROGRAMS</a></li>
                                                <li><a href="{{route('alumni-stories')}}">STORY</a></li>
                                                <li><a href="{{route('all-news')}}">NEWS</a></li>
                                            @else
                                                <li><a href=".{{route('register')}}">REGISTER</a></li>
                                                <li><a href="{{route('all-programs')}}">PROGRAMS</a></li>
                                                <li><a href="{{route('alumni-stories')}}">STORY</a></li>
                                            @endif
                                        </ul>
                                    </div>

                                    <div class="col-sm-3 col-xs-12">
                                        <h6 class="heading-bold">ABOUT US</h6>
                                        <ul class="list-unstyled no-margin">
                                            <li><a href="{{route('all-news')}}">NEWS</a></li>
                                            <li><a href="{{route('all-programs')}}">EVENTS</a></li>
                                            <li><a href="/about">ABOUT US</a></li>
                                            <li><a href="/contact-us">CONTACT US</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6 col-xs-12">
                                        <h6 class="heading-bold text-uppercase">Announcements</h6>
                                        <ul class="list-unstyled no-margin">
                                            <li><a href="{{ route('iftar') }}">UIU CSE Ramadan Get Together 2019</a></li>
                                            <li><a href="{{ route('uiu-it-career-fair-schedule') }}">UIU iT Career Fair Schedule</a></li>
                                            <li><a href="{{ route('apply-for-job-fair') }}">Job Fair 2019</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12 col-xs-12 animated footer-col">
                            <div class="links-social">
                                @if (Auth::check())

                                @else
                                    <div class="login-dashboard">
                                        <a href="{{route('login')}}" class="bg-color-theme text-center text-regular">Login Dashboard</a>
                                    </div>
                                @endif

                                <ul class="list-inline text-center">
                                    <li><a href="https://www.facebook.com/uiucsealumni/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom text-center">
                    <p class="copyright text-light">Designed & Developed with <i class="fas fa-heart color-red"></i> by <a class="augnitive-primary text-bold" target="_blank" href="https://augnitive.com/">Augnitive</a></p>
                </div>
            </div>
        </footer>
    </div>
    <!--End footer wrapper-->
