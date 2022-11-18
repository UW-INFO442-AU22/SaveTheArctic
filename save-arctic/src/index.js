import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7fzIodJfFbuD-4I20QE92biiZdemhit8",
  authDomain: "savethearctic442.firebaseapp.com",
  projectId: "savethearctic442",
  storageBucket: "savethearctic442.appspot.com",
  messagingSenderId: "841319937621",
  appId: "1:841319937621:web:912a980a111ce8d16e46dc",
  measurementId: "G-9NP931M8RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
