import { routes } from '../routes/index.js';
import { Database } from '../database/database.js';

const database = new Database();

export function routeHandler(request, response) {
    const route = routes.find(route => route.method === request.method && route.path === request.url);

    if (route) {
        route.controller({request, response, database});
    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: '❌ Route not found' }));
    }


}