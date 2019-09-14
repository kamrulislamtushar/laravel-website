@extends('layouts.theme')
@section('title')
    News
@endsection
@section('content')

    <!--Begin content wrapper-->

 <div class="content-wrapper">
  <div class="blog-content">
    <div class="container">
      <div class="row">
        <div class="col-main col-lg-8 col-md-7 col-xs-12">
          @foreach($news as $key=>$single_news)
            <!-- <div class="articles">
                <div class="article-item">
                    <div class="area-img">
                      <img class="img-responsive" src="{{ asset('/storage/'.$single_news->image) }}" alt="">
                    </div>
                    <div class="area-content">
                      <div class="article-left col-lg-2 col-md-3 col-sm-3 col-xs-12 pull-left">
                        <div class="category-title">
                          <h6 class="text-regular">{{ Carbon\Carbon::parse($single_news->created_at)->format('d-M-Y') }}</h6>
                        </div>
                      </div>
                      <div class="article-right col-lg-10 col-md-9 col-sm-9 col-xs-12 pull-left">
                        <h3><a href="{{route('news-details', $single_news->slug)}}">{{$single_news->title}}</a></h3>
                        <p>{!!  str_limit($single_news->content, $limit = 350, $end = '...')  !!}</p>
                      </div>
                    </div>
                </div>
            </div> -->
           

           <div class="blog-post-content">
                <!--Blog Post-->
              <div class="article-post">
                <div class="article-img">
                  <img class="img-responsive" src="{{asset('/storage/'.$single_news->image)}}" alt="">
                </div>
                  <div class="article-content">
                    <div class="article-title col-lg-2 col-md-3 col-sm-3 col-xs-12 pull-left">
                      <h6 class="text-regular">{{ Carbon\Carbon::parse($single_news->created_at)->format('d-M-Y') }}</h6>
                    </div>
                    <div class="col-lg-10 col-md-9 col-sm-9 col-xs-12 pull-left">
                      <div class="desc">
                        <h3><a href="{{route('news-details', $single_news->slug)}}">{{$single_news->title}}</a></h3>
                        <p>
                       {{ $single_news->teaser }}
                      </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          @endforeach
        </div>

       <div class="sidebar blog-right col-lg-4 col-md-5 hidden-sm hidden-xs">
          <div class="block-sidebar">
            <div class="block-item popular-post">
              <div class="block-title text-center">
                <h5 class="text-regular text-uppercase">RECENT NEWS</h5>
              </div>
              @foreach($latestNews as $latest)
                <div class="block-content">
                  <ul>
                    <li>
                        <div class="area-img">
                            <img src="{{asset('/storage/'.$latest->image)}}" alt="">
                        </div>
                        <div class="area-content">
                            <h6><a href="{{route('news-details', $latest->slug)}}">{{$latest->title}}</a></h6>
                            <div class="stats">
                                <span class="clock">
                                    <span class="icon clock-icon"></span>
                                    <span class="text-center text-light">{{ Carbon\Carbon::parse($latest->created_at)->format('d-M-Y') }}</span>
                                </span>
                            </div>
                        </div>
                    </li>
                  </ul>
                </div>
              @endforeach
            </div>
          </div>
        </div>
      </div>
   </div>
 </div>
 </div>
 <!--End content wrapper-->
@endsection
