import { formatDate } from "@/utils/formatDate";
import React from "react";

function ReceivedMessage({ message, date, userName }) {
    return (
        <li className="flex flex-col">
            <div className="bg-gray-300 text-black p-2 rounded-lg w-fit max-w-xs flex flex-col">
                <span className="text-blue-600 text-xs font-medium capitalize">
                    {userName}
                </span>
                <p>{message}</p>
                <span className="text-gray-600 text-xs">
                    {formatDate(date)}
                </span>
            </div>
        </li>
    );
}

export default ReceivedMessage;
