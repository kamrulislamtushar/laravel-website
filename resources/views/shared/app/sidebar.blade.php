<nav class="sidebar">
    <ul class="nav">
        <li><a href="{{ route('home.index') }}">Dashboard</a></li>
        @role('Admin')
        <li><a href="{{ route('events.index') }}">Events</a></li>
        <li><a href="{{ route('users.index') }}">Members</a></li>
        <li><a href="{{ route('pages.index') }}">Page</a></li>
        <li><a href="{{ route('news.index') }}">News</a></li>
        <li><a href="{{ route('stories.index') }}">Stories</a></li>
        <li><a href="{{ route('sliders.index') }}">Slider</a></li>
        <li><a href="{{ route('roles.index') }}">Roles</a></li>
        <li><a href="{{ route('donation-list') }}">Payment History</a></li>
        <li><a href="{{ route('show') }}">Job-Fair-Students</a></li>
        @endrole
    </ul>
</nav>
