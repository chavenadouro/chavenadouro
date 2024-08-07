// netlify/functions/updateSpecial.js
exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);

    if (!data.dailySpecial) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid data' }),
        };
    }

    // Lógica para processar a especialidade do dia
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Especialidade atualizada com sucesso!' }),
    };
};
