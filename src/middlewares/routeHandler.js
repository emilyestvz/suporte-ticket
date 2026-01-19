import { routes } from '../routes/index.js';
import { Database } from '../database/database.js';

const database = new Database();

export async function routeHandler(request, response) {
    const route = routes.find((route) => {
        console.log(route)
        return route.method === request.method && route.path.test(request.url);
    });

    if (route) {
        route.controller({request, response, database});
    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: '❌ Route not found' }));
    }


}