<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $timezone = 'Africa/Cairo';

        // Grouping all the messages by day date.
        $messages = Message::with('user')
            ->select(DB::raw('DATE(created_at) as date'), 'id', 'user_id', 'message', 'created_at')
            ->orderBy('created_at')
            ->get()
            ->groupBy(function ($message) use ($timezone) {
                return Carbon::parse($message->created_at)
                    ->setTimezone($timezone)
                    ->format('Y-m-d');
            });

        return response()->json($messages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = Message::create([
            'message' => $request->message,
            'user_id' => auth()->id(),
        ]);

        // Load the user relationship
        $message->load('user');

        // Broadcast the new message to all other listeners
        broadcast(new MessageSent($message))->toOthers();

        return response()->json(['status' => 'Message Sent!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
