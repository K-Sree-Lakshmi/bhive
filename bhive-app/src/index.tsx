import React from 'react';
import ReactDOM from 'react-dom'; // Change here to import from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use ReactDOM.render instead of ReactDOM.createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Pass the DOM element directly as the second argument
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
