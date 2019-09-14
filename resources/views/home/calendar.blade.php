<div class="column-calendar">
    <div class="title-links">
        <h3 class="heading-regular">EVENT CALENDAR</h3>
    </div>


    <div class="content-calendar bg-calendar no-padding">
        <div class="list-view">
            @foreach($allEvents as $event)
            <div class="view-item">
                <div class="date-item">
                    <span class="dates text-light">{{ date('d', strtotime($event->date))}}</span>
                    <span class="day text-bold color-theme">{{ date('M', strtotime($event->date))}}</span>
                    <span class="month text-light">{{ date('Y', strtotime($event->date))}}</span>
                </div>
                <div class="date-desc-wrapper">
                    <div class="date-desc">
                        <div class="date-title">
                            <a href="{{route('event-details', $event->slug)}}">
                                <h6 class="heading-regular">{{$event->title}}</h6>
                            </a>

                        </div>
                        <div class="date-excerpt">
                            <p>Organizer: {{$event->organizer}}</p>
                        </div>
                        <div class="place">
                            <span class="icon map-icon"></span>
                            <span class="text-place">{{$event->address}}</span>
                        </div>
                    </div>
                </div>
            </div>
                @endforeach
        </div>
    </div>

    <div class="view-all"><a class="event-view-btn" href="{{route('all-programs')}}">View All Events</a></div>
</div>
