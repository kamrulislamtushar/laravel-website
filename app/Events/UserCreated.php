<?php

namespace App\Events;
use App\Model\User;
use App\Profile;
use Illuminate\Queue\SerializesModels;

class UserCreated
{
    use SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
        $this->create_information();
    }

    public function create_information()
    {
        Profile::create([
           'user_id' => $this->user->id,
            'information' => [
                'work' => [],
                'personal' => [],
                'contact' => [],
                'education' => []
            ]
        ]);
    }
}
