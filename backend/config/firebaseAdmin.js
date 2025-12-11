const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.GCLOUD_SERVICE_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

console.log("====> Firebase Admin Initialized");

module.exports = { admin };


