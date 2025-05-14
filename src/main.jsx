import { Provider } from "./components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AlertProvider } from "./context/alertContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Provider>
  </StrictMode>
);
