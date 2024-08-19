export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}
