import React from "react";

function MessageInput({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        />
    );
}

export default MessageInput;
