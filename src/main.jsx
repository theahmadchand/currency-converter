import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { ConvertCurrencyProvider } from "./context";
import { App } from "./App";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <ConvertCurrencyProvider>
                <App />
            </ConvertCurrencyProvider>
        </PrimeReactProvider>
    </React.StrictMode>
);
