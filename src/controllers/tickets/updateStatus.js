export function updateStatus({request, response, database}) {

    const { id } = request.params;
    database.update('tickets', id, { status: 'closed' });

    return response.end(JSON.stringify({
        message: '✅ Ticket closed successfully',
    }));
}