const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'OJcVkCbZ#5C_9G7zxqepWWPz9BSjejVm1-YhD0rVaAC05SI0sVVA', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://cpro95528:shashika2005@mrhansamala.fuzm7.mongodb.net/?retryWrites=true&w=majority&appName=mrhansamala',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94751629685',    // Enter Your Owner Number
};
