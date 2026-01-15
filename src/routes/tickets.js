import { create } from '../controllers/tickets/create.js';
import { index } from '../controllers/tickets/index.js';

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        // Função que será executada quando a rota for acessada
        controller: create,
    },
    {
        method: "GET",
        path: "/tickets",
        controller: index,
    },

];

