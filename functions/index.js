const admin = require("firebase-admin");
admin.initializeApp();

// Importing the addMessage function
const {addMessage} = require("./api/addMessage");

// Exporting the function for deployment
exports.addMessage = addMessage;
