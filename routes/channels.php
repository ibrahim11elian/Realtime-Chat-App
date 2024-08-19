<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat', function ($user) {
    // This function can return true to allow all users to access the channel
    // or use $user to check specific user permissions
    return true; // Or you can check if $user is authorized to join the channel
});
