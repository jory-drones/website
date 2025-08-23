// /src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Tailwind v4 CSS with @theme tokens

createRoot(document.getElementById("root")).render(<App />);
