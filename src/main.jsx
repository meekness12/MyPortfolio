import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Dynamically load Chatbase script only if configured
const chatbotId = import.meta.env.VITE_CHATBASE_BOT_ID;
if (chatbotId) {
  window.chatbaseConfig = {
    chatbotId,
  };
  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.defer = true;
  document.body.appendChild(script);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
