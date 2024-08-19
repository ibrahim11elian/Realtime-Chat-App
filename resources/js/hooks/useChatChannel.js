import { useQueryClient } from "@tanstack/react-query";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect } from "react";

window.Pusher = Pusher;
// Pusher.logToConsole = true;
const echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_KEY,
    cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    encrypted: true,
});

const useChatChannel = (channelName, eventName, queryKey) => {
    const channel = echo.channel(channelName);
    const queryClient = useQueryClient();

    useEffect(() => {
        channel
            .subscribed(() => {
                console.log(`Subscribed to ${channelName} channel`);
            })
            .listen(eventName, (e) => {
                queryClient.setQueryData([queryKey], (oldMessages) => {
                    const date = new Date(e.message.created_at)
                        .toLocaleDateString("en-CA")
                        .toString();

                    const updatedMessages = {
                        ...oldMessages,
                        [date]: oldMessages[date]
                            ? [...oldMessages[date], e.message]
                            : [e.message],
                    };

                    return updatedMessages;
                });
            });

        return () => {
            echo.leaveChannel(channelName);
        };
    }, []);
};

export default useChatChannel;
