const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const data = JSON.parse(event.body);
        if (data.dailySpecial) {
            const filePath = path.join(__dirname, 'daily-special.json');
            const jsonData = JSON.stringify({ dailySpecial: data.dailySpecial }, null, 2);
            fs.writeFileSync(filePath, jsonData);
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true })
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: 'Invalid data' })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: error.message })
        };
    }
};
