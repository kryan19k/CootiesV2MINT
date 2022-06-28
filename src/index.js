import React from "react";
import ReactDOM from "react-dom/client";
import "react-bootstrap"; // react bootstrapimport
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import "./assets/css/responsive.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
