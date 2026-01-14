export const tickets = [
    {
        method: "POST",
        path: "/tickets",

        // Função que será executada quando a rota for acessada
        controller: (request, response) => {
            response.end(JSON.stringify({ message: "✔ Ticket created!" }));
        },

    },

];

