import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOJDvR7wyreD4GIRxc8Wyoy7ScdX8Fl2k",
    authDomain: "siruang.firebaseapp.com",
    projectId: "siruang",
    storageBucket: "siruang.firebasestorage.app",
    messagingSenderId: "924192819702",
    appId: "1:924192819702:web:210a439bce8d8a38479fd7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);