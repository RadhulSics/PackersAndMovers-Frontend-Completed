import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import 'owl.carousel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    <ToastContainer
      theme="light"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
    />
      <App />
  </React.StrictMode>
);


reportWebVitals();
