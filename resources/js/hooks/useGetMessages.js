import { useQuery } from "@tanstack/react-query";

const fetchMessages = async () => {
    const { data } = await axios.get("/api/messages");
    return data;
};

function useGetMessages() {
    const {
        data: messages,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["messages"],
        queryFn: fetchMessages,
    });

    return { messages, isLoading, error };
}

export default useGetMessages;
