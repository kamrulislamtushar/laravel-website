@if(isset($story))
<div class="alumni-interview image-transparent" style="background:linear-gradient(to right, transparent, #0c0d10) ,url({{asset('/storage/'.$story->image)}})">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 pull-right">
                <div class="interview-wrapper">
                    <div class="interview-title">
                        <h4 class="heading-light text-capitalize">Alumni Interview</h4>
                        <h1 class="heading-light text-capitalize">{{$story->name}}</h1>
                    </div>
                    <div class="interview-desc text-left">
                        <p class="text-light">{{$story->teaser}}</p>
                    </div>
                    <div class="interview-see-story">
                        <a href="{{route('story-details',$story)}}" class="see-story bnt text-uppercase">SEE FULL STORY</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    @endif