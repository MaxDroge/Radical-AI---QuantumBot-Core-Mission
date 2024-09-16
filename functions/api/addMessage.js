const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const logger = require('firebase-functions/lib/logger');

exports.addMessage = functions.https.onCall(async (data, context) => {
    try {
        // Validate data object
        const {text, userID} = data;

        if (!text || !userID) {
            throw new functions.https.HttpsError(
                'invalid-argument',
                'The function must be called with two arguments: "text" and "userID".'
            );
        }

        // Construct message data
        const messageData = {
            text,
            userID,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        };

        // Add message to the user's message subcollection in Firestore
        const messageRef = await admin
            .firestore()
            .collection("chats")
            .doc(userID)
            .collection("messages")
            .add(messageData);

        logger.log("Message added successfully, message ID: ", messageRef.id);

        // Return success status and message ID
        return {status: "success", messageID: messageRef.id};
    } catch (error) {
        logger.error("Error adding message: ", error);
        // Throw a structured error for the client
        throw new functions.https.HttpsError(
            "unknown",
            "An error occurred while adding the message.",
            error.message
        );
    }
});
