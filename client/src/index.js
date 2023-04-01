import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpU9SXRNQmyYHs8_s1tNkaehw_BzCIVN8",
//   authDomain: "amber-martinez-portfolio.firebaseapp.com",
//   databaseURL: "https://amber-martinez-portfolio-default-rtdb.firebaseio.com",
//   projectId: "amber-martinez-portfolio",
//   storageBucket: "amber-martinez-portfolio.appspot.com",
//   messagingSenderId: "329631638541",
//   appId: "1:329631638541:web:1ced0bc6af46a974662144",
//   measurementId: "G-M5BC00WW50"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
