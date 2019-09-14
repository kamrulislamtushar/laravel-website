<div class="column-news">
  <div class="title-links">
    <h3 class="heading-regular">LATEST NEWS</h3>
  </div>
  <div class="post-content">
    @foreach($allNews as $news)
      <div class="post-wrapper">
          <div class="post-item clearfix ">
              <div class="image-frame post-photo-wrapper">
                  <a href="{{route('news-details', $news->slug)}}"> <img src="{{asset('storage/'.$news->image) }}" alt="No Photo"></a>
              </div>
              <div class="post-desc-wrapper">
                  <div class="post-desc">
                      <div class="post-title"><h6 class="heading-regular"><a href="{{route('news-details', $news->slug)}}">{{$news->title}}</a></h6></div>
                      <div class="post-excerpt">
                          <p> {{ $news->teaser }} </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    @endforeach
  </div>
  <div class="view-all"><a href="{{route('all-news')}}">View Latest News</a></div>
</div>
