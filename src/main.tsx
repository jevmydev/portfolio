import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";
import { PreferenceProvider } from "./context/preference";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <PreferenceProvider>
            <App />
        </PreferenceProvider>
    </React.StrictMode>
);
