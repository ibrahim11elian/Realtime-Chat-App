import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const sendMessageApi = async (message) => {
    await axios.post("/api/messages", { message });
};

function useSendMessage() {
    const queryClient = useQueryClient();
    const {
        mutate: sendMessage,
        isPending: isSending,
        error,
    } = useMutation({
        mutationKey: ["sendMessage"],
        mutationFn: sendMessageApi,
        onSuccess: () => {
            queryClient.invalidateQueries(["messages"]);
        },
    });

    return { sendMessage, isSending, error };
}

export default useSendMessage;
