import { memo } from "react";

function MessageForm({ children, ...props }) {
    return (
        <form {...props} className="bg-white p-4 flex items-center gap-2">
            {children}
        </form>
    );
}

export default memo(MessageForm);
