<div class="header-wrapper header-position">
    <header id="header" class="container-header type1">
        <div class="top-nav">
            <div class="container">
                <div class="row">
                    <div class="top-left col-sm-6 hidden-xs">
                        <ul class="list-inline">
                            <li>
                                <a href="mailto:contact@alumni.cse.uiu.ac.bd">
                                    <span class="icon mail-icon"></span>
                                    <span class="text">contact@alumni.cse.uiu.ac.bd</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon phone-icon"></span>
                                    <span class="text">+8801779515401</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="top-right col-sm-6 col-xs-12">
                        <ul class="list-inline">
                        <li>
                           <a class="btn-donate" href="/contribute-for-uiucseaa">Contribute</a>
                        </li>
                            {{--<li class="top-search">--}}
                                {{--<form class="navbar-form search no-margin no-padding">--}}
                                    {{--<input type="text" name="q" class="form-control input-search" placeholder="search..." autocomplete="off">--}}
                                    {{--<button type="submit" class="lnr lnr-magnifier"></button>--}}
                                {{--</form>--}}
                            {{--</li>--}}
                            @guest
                                <li class="login">
                                    <a href="{{ route('login') }}">Log In</a>
                                </li>
                                    <li class="register">
                                    <a href="{{route('register')}}">Register</a>
                                   </li>
                            @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        <b>Welcome ! </b>{{ Auth::user()->name }} <span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right nav-font-color" aria-labelledby="navbarDropdown">
                                        <ul class="nav">
                                            <li><a href="{{ route('home.index') }}">
                                                    <i class="fa fa-dashboard"></i> Dashboard
                                            </a></li>
                                            <li>
                                                <a class="dropdown-item" href="{{ route('logout') }}"
                                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                                    <i class="fa fa-sign-out"></i>{{ __('Logout') }}
                                                </a>

                                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                    @csrf
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle">
            <div class="container">
                <div class="logo hidden-sm hidden-xs">
                    <a href="{{ url('/') }}"> <img class="img-responsive" src="/images/logo.jpg" alt="logo"></a>
                </div>
                <div class="menu">
                    <nav>
                        <ul class="nav navbar-nav">
                            <li>
                                <div class="drop-down">
                                    <a class="dropbtn" href="{{route('about-us')}}">ABOUT US</a>
                                    <div class="drop-down-content">
                                        <a href="{{route('alumni')}}">ALUMNI DIRECTORY</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="{{route('all-programs')}}">PROGRAM &amp; EVENTS</a>
                            </li>

                            <li>
                                <a href="{{route('alumni-stories')}}">ALUMNI STORY</a>
                            </li>
                            <li>
                                <a href="{{route('committee')}}">ALUMNI COMMITTEE</a>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div class="area-mobile-content visible-sm visible-xs">
                    <div class="logo-mobile">
                        <a href="{{ url('/') }}"> <img src="/images/logo-alumni.png" alt="logo"></a>
                    </div>
                    <div class="mobile-menu ">
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
