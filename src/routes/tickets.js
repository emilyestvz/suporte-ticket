import { create } from '../controllers/tickets/create.js';
import { index } from '../controllers/tickets/index.js';
import { remove } from '../controllers/tickets/remove.js';
import { update } from '../controllers/tickets/update.js';
import { updateStatus } from '../controllers/tickets/updateStatus.js';

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
    {
        method: "PUT",
        path: "/tickets/:id",
        controller: update,
    },
    {
        method: "PATCH",
        path: "/tickets/:id/close",
        controller: updateStatus,
    },
    {
        method: "DELETE",
        path: "/tickets/:id",
        controller: remove,
    },


];

