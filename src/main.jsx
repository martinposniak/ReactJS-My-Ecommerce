import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9As_oHZYsSShfNriuEP9nsLSpnqn5y2o",
  authDomain: "comision-51100-27a33.firebaseapp.com",
  projectId: "comision-51100-27a33",
  storageBucket: "comision-51100-27a33.appspot.com",
  messagingSenderId: "442575557808",
  appId: "1:442575557808:web:b9161b6c6b6482d1f95775"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
