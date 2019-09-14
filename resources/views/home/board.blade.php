<div class="alumni-dashboard">
    <div class="container">
        <div class="title title-dashboard type1">
            <h3 class="heading-light no-margin"> My Sayidan Alumni Dashboard </h3>
        </div>
        <div class="area-content">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="icon mail-icon"></div>
                    <div class="box-content">
                        <h4 class="heading-regular"> Checking Message </h4>
                        <p class="text-content text-margin text-light ">
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="icon account-icon"></div>
                    <div class="box-content">
                        <h4 class="heading-regular"> Update My Information </h4>
                        <p class="text-content text-margin text-light">
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="icon group-icon"></div>
                    <div class="box-content">
                        <h4 class="heading-regular"> Join with Alumni Forum </h4>
                        <p class="text-content text-margin text-light">
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="icon search-icon"></div>
                    <div class="box-content">
                        <h4 class="heading-regular"> Search Alumni Directory </h4>
                        <p class="text-content text-margin text-light">
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.
                        </p>
                    </div>
                </div>
                @if (Auth::check())

                @else
                    <div class="login-dashboard text-center col-sm-12 col-xs-12">
                        <a href="{{route('login')}}" class="bnt bnt-theme login-links">LOG IN TO ALUMNI DASHBOARD</a>
                    </div>
                @endif

            </div>
        </div>
    </div>
</div>