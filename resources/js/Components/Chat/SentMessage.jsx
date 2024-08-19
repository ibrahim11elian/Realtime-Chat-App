import { formatDate } from "@/utils/formatDate";
import React from "react";

function SentMessage({ message, date }) {
    return (
        <li className="flex justify-end">
            <div className="bg-blue-200 text-black p-2 rounded-lg w-fit max-w-xs">
                <p>{message}</p>
                <span className="text-gray-600 text-xs text-right block">
                    {formatDate(date)}
                </span>
            </div>
        </li>
    );
}

export default SentMessage;
