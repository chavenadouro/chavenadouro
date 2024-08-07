exports.handler = async (event, context) => {
    console.log('Received event:', event);

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    if (!data.dailySpecial) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid data' }),
        };
    }

    // Logica para processar a especialidade do dia
    console.log('Updating daily special to:', data.dailySpecial);

    // Simulando a atualização do JSON
    const updatedData = { dailySpecial: data.dailySpecial };

    console.log('Updated data:', updatedData);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Especialidade atualizada com sucesso!', data: updatedData }),
    };
};
