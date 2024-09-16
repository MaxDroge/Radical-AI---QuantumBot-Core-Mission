const admin = require("firebase-admin");
admin.initializeApp();

// Import the function from the specified file
const {addMessage} = require("./api/addMessage");

// Export the function to be deployed
exports.addMessage = addMessage;
