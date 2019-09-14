
@if(isset($event))
<div class="upcoming-event">
    <div class="container">
        <div class="row">
            <div class="area-img col-md-5 col-sm-12 col-xs-12">
                <img class="img-responsive animated zoomIn" src="{{asset('storage/'.$event->banner) }}" alt="">
            </div>
            <div class="area-content col-md-7 col-sm-12 col-xs-12">
                <div class="area-top">
                    <div class="row">
                        <div class="col-sm-10 col-xs-9">
                            <h5 class="heading-light no-margin animated fadeInRight">UPCOMING EVENT</h5>
                            <h2 class="heading-bold animated fadeInLeft">{{$event->title}}</h2>
                            <span>

                                <span class="text-place text-light animate fadeInRight">
                                    <strong>Description:</strong>
                                    {!!  $event->teaser!!}

                                </span>
                                <hr>
                                <span class="icon map-icon"></span>
                                <span class="text-place text-light animated fadeInRight">{{$event->address}}</span>
                            </span>

                        </div>
                        <div class="col-sm-2 col-xs-3">
                            <div class="area-calendar calendar animated slideInRight">
                                <span class="day text-bold">{{ date('d', strtotime($event->date)) }}</span>
                                <span class="month text-light">{{ date('M', strtotime($event->date)) }}</span>
                                <span class="year text-light bg-year">{{ date('y', strtotime($event->date)) }}</span>
                            </div>

                        </div>
                        <div class="area-bottom">
                            {{--<div id="time" class="pull-left animated slideInLeft"></div>--}}
                            <a href="{{route('event-details', $event->slug)}}" class="bnt bnt-theme join-now pull-right animated fadeIn">Details</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</div>
    @endif
