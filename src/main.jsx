import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming your App.js file is in the same directory
import './index.css'; // Make sure your Tailwind CSS output is imported here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);