import useChatChannel from "@/hooks/useChatChannel";
import useGetMessages from "@/hooks/useGetMessages";
import useScrollToBottom from "@/hooks/useScrollToBottom";
import Spinner from "../Spinner";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import { memo } from "react";

function MessageList({ user }) {
    const { messages, isLoading, error } = useGetMessages();

    const bottomRef = useScrollToBottom(messages);

    useChatChannel("chat", ".MessageSent", "messages");

    if (isLoading)
        return (
            <div className="flex-1 flex items-center justify-center">
                <Spinner size="large" />
            </div>
        );

    if (error) return <div>{error.message}</div>;

    return (
        <ul
            className="flex flex-col space-y-2 flex-1 p-4"
            style={{ height: "400px", overflowY: "scroll" }}
        >
            {Object.keys(messages).map((date) => (
                <div key={date}>
                    {/* render the date */}
                    <div className="text-center text-gray-500 mb-4 bg-green-300 px-3 py-2 text-sm rounded w-fit mx-auto">
                        {new Date(date).toLocaleDateString()}
                    </div>
                    {/* render the messages for that date */}
                    <ul className="space-y-2">
                        {messages[date].map((message) =>
                            message.user_id === user.id ? (
                                <SentMessage
                                    key={message.id}
                                    message={message.message}
                                    date={message.created_at}
                                    user={message.user}
                                />
                            ) : (
                                <ReceivedMessage
                                    key={message.id}
                                    message={message.message}
                                    date={message.created_at}
                                    userName={message.user.name}
                                />
                            )
                        )}
                    </ul>
                    <li ref={bottomRef} />
                </div>
            ))}
        </ul>
    );
}

export default memo(MessageList);
