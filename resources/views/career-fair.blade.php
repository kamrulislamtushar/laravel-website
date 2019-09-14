@extends('layouts.theme')
@section('title')
    UIU iT Career Fair 2019 Powered By Instructory
@endsection


@section('og-tags')
    <meta property="og:url"                content="http://alumni.cse.uiu.ac.bd/uiu-it-career-fair-schedule" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="UIU IT Career Fair 2019 Powered By Instructory" />
    <meta property="og:description"        content="UIU iT Career Fair Event Schedule, Sponsors, Participants & Guests" />
    <meta property="og:image"              content="http://alumni.cse.uiu.ac.bd/images/career-fair/career.jpg" />
@endsection
@section('content')
        <div class="container career ">
            <div class="row ">
                <div class="col-md-12  pt-100">
                    <div class="col-lg-7">
                        <img class="img img-responsive" src="images/career-fair/career.jpg">
                    </div>
                    <div class="col-lg-5 pt-55">
                        <h1 class="text-capitalize text-bold">UIU iT Career Fair 2019
                            <span class="d-block mt-20">Powered By <a class="nav-link color-primary" href="https://instructory.net" target="_blank">Instructory</a></span></h1>
                        <h4 class="ml-20 mt-20"><i class="far fa-calendar-alt"></i>   6th - 7th April 2019</h4>
                        <br>
                        <h4 class="ml-20"><i class="fas fa-map-marker"></i>   UIU , Permanent Campus</h4>
                        <div class="pt-25 count-down " id="countdown"></div>
                    </div>
                </div>
            </div>

            <div class="row  pt-55">
                <div class="col-12 text-center">
                    <h2 class="color-primary text-bold sponsor-title text-uppercase">Title Sponsor</h2>
                    <div class="text-center pt-100">
                        <a href="https://instructory.net/" target="_blank"><img class="mt-minus-120 sponsor-logo text-center" src="images/career-fair/instructory.png"></a>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-12 text-center  ">
                    <h2 class="color-primary  text-bold sponsor-title text-uppercase">Sponsors</h2>
                    <div class="pt-100">
                        <div class="row">
                            <div class=" col-lg-3 item"> <a href="https://www.ergo-ventures.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo" src="images/career-fair/ergo.png" ></a></div>
                            <div class="col-lg-3 item"> <a href="https://www.augnitve.com/" target="_blank"><img  class="mt-minus-120 augnitive sponsor-logo" src="images/career-fair/Augnitive.png"></a></div>
                            <div class="col-lg-3 item"> <a href="http://www.vivacomsolutions.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo stream-teach" src="images/career-fair/vivacom.png"></a></div>
                            <div class="col-lg-3 item"> <a href="https://streamstech.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo stream-teach" src="images/career-fair/stream-tech.png"></a></div>
                        </div>
                       <div class="row pt-25">
                           <div class="col-lg-4 item"> <a href="https://www.nascenia.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo nascenia" src="images/career-fair/Nascenia.png"></a></div>
                           <div class="col-lg-4 item"> <a href="https://www.facebook.com/dhakaibaburchi/" target="_blank"><img  class="mt-minus-120 db dk-baburchi " src="images/career-fair/d-b.png"></a></div>
                           <div class=" col-lg-4 item"> <a href="https://www.sslcommerz.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo" src="images/career-fair/ssl.png"></a></div>
                       </div>
                    </div>
                    </div>

            </div>
            <div class="row pt-100 ">
                <div class="col-12 text-center participants ">
                    <h2 class="color-primary text-center text-bold sponsor-title text-uppercase">Participants</h2>
                    <div class="mt-minus-30 sponsor-logo pt-100">
                        <div class="row">
                            <div class="col-lg-3 "> <a href="https://www.mazegeek.com" target="_blank"><img  class="mt-minus-120 mt-50 sponsor-logo" src="images/career-fair/mazegeek.png"></a></div>
                            <div class="col-lg-3 "> <a href="http://www.cdip.uiu.ac.bd" target="_blank"><img  class=" mt-117 sponsor-logo cdip cdip-logo" src="images/career-fair/cdip.png"></a></div>
                            <div class="col-lg-3 "> <a href="https://preneurlab.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo p-lab cdip" src="images/career-fair/pl.png"></a></div>
                            <div class="col-lg-3 "> <a href="http://www.bitmascot.com/" target="_blank"><img  class="mt-minus-120 mt-50 sponsor-logo bitmascot" src="images/career-fair/bitmascot.png"></a></div>
                        </div>
                        <div class="row pt-25">
                            <div class="col-lg-4 "> <a href="http://cisco.uiu.ac.bd/" target="_blank"><img  class="mt-minus-120 mt-117 sponsor-logo pt-55 pl-105" src="images/career-fair/cisco.png"></a></div>
                            <div class="col-lg-4 "> <a href="https://shikhbeshobai.com/" target="_blank"><img  class="mt-minus-120 sponsor-logo cdip pl-105" src="images/career-fair/SS-Logo.png"></a></div>
                            <div class="col-lg-4 "> <a href="http://datasoft-bd.com/" target="_blank"><img  class="mt-minus-120 mt-117 data-soft pt-55 pl-105" src="images/career-fair/datasoft.png"></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-100 ">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 text-center mt-2">
                        <div class="title">
                            <h2 class="color-primary sponsor-title text-bold text-uppercase">Panelists</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-12">
                    <div class="panelist">
                        <div class="owl-carousel">
                            <div class="item"> <img src="{{ asset('images/panelist/vc.jpg') }}">
                                <div class="text-center speaker-details">
                                    <h3>Prof. Dr. Mohammad Mahfuz Islam</h3>
                                    <h5 class="pt-10">Vice Chancellor</h5>
                                    <p>Canadian University of Bangladesh</p>

                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/panelist/zakaria.jpeg') }}">
                                <div class="text-center speaker-details">
                                    <h3>Mr. Zakaria Swapan</h3>
                                    <h5 class="pt-10">Founder and CEO</h5>
                                    <p>iPay Systems Ltd</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/panelist/manjur.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Mr. M Manjur Mahmud</h3>
                                    <h5 class="pt-10">Director and COO</h5>
                                    <p>DataSoft Systems Bangladesh Ltd</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/panelist/mehedi.jpg') }}">
                                <div class="text-center speaker-details">
                                    <h3>Mr. Mehedi Masud</h3>
                                    <h5 class="pt-10">Director and COO</h5>
                                    <p>BJIT Ltd.</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/panelist/shaer.jpg') }}">
                                <div class="text-center speaker-details">
                                    <h3>Mr. Shaer Hassan</h3>
                                    <h5 class="pt-10">CEO</h5>
                                    <p>Nascenia</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

           <div class="row pt-100 ">
               <div class="row align-items-center justify-content-center">
                   <div class="col-12 text-center mt-2">
                       <div class="title">
                           <h2 class="color-primary sponsor-title text-bold text-uppercase">Speakers and Guests</h2>
                       </div>
                   </div>
               </div>
           </div>
            <div class="row ">
                <div class="col-12">
                    <div class="speakers">
                        <div class="owl-carousel">
                            <div class="item"> <img src="{{ asset('images/speakers/rifat.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Rifat M Huq</h3>
                                    <h5 class="pt-10">CEO & Co-Founder</h5>
                                    <p>Instructory</p>

                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/ahsan.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Ahsan Ahmed</h3>
                                    <h5 class="pt-10">System Developer</h5>
                                    <p>UK Department for International Development</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/faiyaz.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Sheikh Faiyaz Moorsalin</h3>
                                    <h5 class="pt-10">Head of Operations</h5>
                                    <p>Ergo Ventures Ltd.</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/lincoln.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Lincoln Islam</h3>
                                    <h5 class="pt-10">Founder & Visionary</h5>
                                    <p>CodeRex</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/moharak.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>ASM Moharak Hossain</h3>
                                    <h5 class="pt-10">CTO</h5>
                                    <p>Travelbooking Bangladesh Ltd.</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/rezaul.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Reazaul Hasan</h3>
                                    <h5 class="pt-10">Tech Lead</h5>
                                    <p>SSD-Tech</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/sadia.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Sadia Yamin Neel</h3>
                                    <h5 class="pt-10">SR. UI Developer</h5>
                                    <p>SME Informatics</p>
                                </div>
                            </div>
                            <div class="item"> <img src="{{ asset('images/speakers/shohana.png') }}">
                                <div class="text-center speaker-details">
                                    <h3>Sohana Mahmud</h3>
                                    <h5 class="pt-10">Business Analyst</h5>
                                    <p>biTS</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row  pt-55 schedule-table">
                    <div class="col-md-10 col-md-offset-1 col-lg-10 col-sm-10 col-xs-10">
                        {{--<div class="col-lg-12">--}}
                            <h3 class="text-center text-uppercase color-primary sponsor-title text-bold mb-10">Event Schedule</h3>
                        {{--</div>--}}
                        <div class="row mt-10">

                            <h3>6th April</h3>
                            <table class=" table table-hover table-striped schedule table-responsive mt-20">
                                <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Company</th>
                                    <th>Test Type</th>
                                    <th>Venue</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td>Prenuer Lab</td>
                                    <td>Written</td>
                                    <td>Room: 126</td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td>Data Soft</td>
                                    <td>Interview</td>
                                    <td>Meeting Room (1st Floor)</td>
                                </tr>
                                <tr>
                                    <td>11:50 AM</td>
                                    <td>Ergo Ventures Ltd</td>
                                    <td>Written</td>
                                    <td>Room: 126</td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td>Streams Tech Ltd</td>
                                    <td>Written</td>
                                    <td>Room: 126</td>
                                </tr>
                                <tr>
                                    <td>3:30 PM</td>
                                    <td>Mazegeek Inc</td>
                                    <td>Written</td>
                                    <td>Room: 126</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="row">
                            <h3>7th April</h3>
                            <table class="table table-hover table-striped schedule mt-20">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Time</th>
                                    <th>Topic</th>
                                    <th>Speaker/Guest</th>
                                    <th>Venue</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>09:30 AM</td>
                                    <td>Inauguration Ceremony</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10:00 AM</td>
                                    <td>Panel Discussion</td>
                                    <td>Alumni Members</td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>11:30 AM</td>
                                    <td>Lightning Talks</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1:00 PM</td>
                                    <td>Prayer & Lunch Break</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2:00 PM</td>
                                    <td>Opening Speech By The Head of Dept. of CSE</td>
                                    <td>Dr. Salekul Islam</td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>2:10 PM</td>
                                    <td>Panel Discussion on "Future of IT Education Aligned With IT Evolution</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>3:30 PM</td>
                                    <td>Speaker Speech</td>
                                    <td>Rifat M Huq, CEO ,Instructory</td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>3:50 PM</td>
                                    <td>Speech By Director of CCC, UIU</td>
                                    <td>Manjurul Haque Khan</td>
                                    <td>UIU Auditorium</td>
                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td>4:00 PM</td>
                                    <td>Speech From Chief Guest</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>4:15 PM</td>
                                    <td>Speech from Vice Chancellor of UIU</td>
                                    <td>DR. Chowdhury Mofizur Rahman</td>
                                    <td>UIU Auditorium</td>
                                </tr>

                                <tr>
                                    <td>11</td>
                                    <td>4:25 PM</td>
                                    <td>Souvenirs to Honorable Guests</td>
                                    <td></td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>4:30 PM</td>
                                    <td>Thanking Note By President of UIUCSE Alumni Association</td>
                                    <td>MD. Feroj Bepari</td>
                                    <td>UIU Auditorium</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
@section('script')


@endsection
