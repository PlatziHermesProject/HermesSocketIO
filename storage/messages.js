const db = require('../config/db-connection');
const { catCodes } = require('../models/response-codes');
const { ResponseCodes } = require('../models/enums');

// VERIFICAR ESTO CON JORGE POR DB
async function setMessage (message, timestamp, room_id, user_id) {
    try {
        const querystr = `
            INSERT INTO messages(content, created, user_message_id, user_id)
                VALUES ('${message}', to_timestamp(${timestamp} / 1000.0), ${room_id}, ${user_id});
        `;
        await db.cnn.query(querystr);
        return catCodes[ResponseCodes.MESSAGE_OK];
    } catch (error) {
        console.log(error); 
        return catCodes[ResponseCodes.MESSAGE_ERROR];
    }
}

module.exports = {
    setMessage,
}