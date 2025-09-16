import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css"; 

// 👇 Add Chatbase config here
window.chatbaseConfig = {
  chatbotId: import.meta.env.VITE_CHATBASE_BOT_ID, // pulled from .env
};

// Dynamically load Chatbase script
const script = document.createElement("script");
script.src = "https://www.chatbase.co/embed.min.js";
script.defer = true;
document.body.appendChild(script);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
