const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../dailySpecial.json');

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

    // Atualizar o arquivo JSON
    const updatedData = { dailySpecial: data.dailySpecial };
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Especialidade atualizada com sucesso!', data: updatedData }),
    };
};
