export function getDate(date: string | number | Date) {
    return new Date(date).toLocaleDateString("eu", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
