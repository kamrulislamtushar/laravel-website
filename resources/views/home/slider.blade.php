
<div class="slider-hero ">
    <div class="sliders-wrap columns1">
        @foreach($sliders as $slider)
        <div class="item">
            <img src="{{asset('/storage/'.$slider->image)}}" alt="">
            <div class="owl-caption">
                <div class="container">
                    <div class="content-block ">
                        <h2 class="text-center ">
                            <span class="text-bold ">{{$slider->title}}</span> <br />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div> 
