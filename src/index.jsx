import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
