import { useEffect, useRef } from "react";

const useScrollToBottom = (dependencies) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [dependencies]);

    return bottomRef;
};

export default useScrollToBottom;
