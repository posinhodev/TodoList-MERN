import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';                  // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';                                // Iconos de PrimeIcons
import 'primeflex/primeflex.css'; 

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>
);
