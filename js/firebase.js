
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLeMQPnI9unaQGfU3gz8rEKCH_uErjBbI",
    authDomain: "suporteti-76598.firebaseapp.com",
    projectId: "suporteti-76598",
    storageBucket: "suporteti-76598.appspot.com",
    messagingSenderId: "212642925191",
    appId: "1:212642925191:web:2b09e30c970fc706af0622",
    measurementId: "G-Z04XQ8CNTM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
