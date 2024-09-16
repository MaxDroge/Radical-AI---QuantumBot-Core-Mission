// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVpX0o3zak_uxxcRgueHyaGPxHcoxBJvQ",
  authDomain: "quantumbot-core-mission.firebaseapp.com",
  projectId: "quantumbot-core-mission",
  storageBucket: "quantumbot-core-mission.appspot.com",
  messagingSenderId: "696313252537",
  appId: "1:696313252537:web:34e8fcd323e433843a2968",
  measurementId: "G-P167GN4EB9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services
const firestore = firebase.firestore();
