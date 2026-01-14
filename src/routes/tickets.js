import { create } from '../controllers/tickets/create.js';

export const tickets = [
    {
        method: "POST",
        path: "/tickets",

        // Função que será executada quando a rota for acessada
        controller: create,
    },

];

