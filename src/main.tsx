import "framer-plugin/framer.css"

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"  // Changed from {App} to App (default import)

const root = document.getElementById("root")
if (!root) throw new Error("Root element not found")

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)