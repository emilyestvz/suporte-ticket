export function updateStatus({request, response, database}) {

    const { id } = request.params;
    const { solution } = request.body;

    database.update('tickets', id, { status: 'closed', solution, closed_at: new Date() });

    return response.end(JSON.stringify({
        message: '✅ Ticket closed successfully',
    }));
}