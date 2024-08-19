import ChatHeader from "@/Components/Chat/ChatHeader";
import MessageForm from "@/Components/Chat/MessageForm";
import MessageInput from "@/Components/Chat/MessageInput";
import MessageList from "@/Components/Chat/MessageList";
import SendButton from "@/Components/Chat/SendButton";
import Spinner from "@/Components/Spinner";
import useSendMessage from "@/hooks/useSendMessage";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Chat = ({ auth }) => {
    const [message, setMessage] = useState("");

    const { sendMessage, isSending } = useSendMessage();

    const handleSend = (e) => {
        e.preventDefault();
        if (!message) return;
        sendMessage(message, {
            onSettled: setMessage(""),
        });
    };

    return (
        <>
            <Head title="Chat" />
            <div className="bg-gray-100 h-screen flex flex-col w-full">
                <ChatHeader name={auth.user.name} />

                <MessageList user={auth.user} />

                <MessageForm onSubmit={handleSend}>
                    <MessageInput
                        disabled={isSending}
                        value={message}
                        onChange={setMessage}
                    />
                    {isSending ? (
                        <Spinner size="medium" />
                    ) : (
                        <SendButton disabled={isSending} />
                    )}
                </MessageForm>
            </div>
        </>
    );
};

export default Chat;
