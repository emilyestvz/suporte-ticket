
export function create({ request, response }) {
    return response.end(JSON.stringify({ message: "✔ Ticket created!" }));
}