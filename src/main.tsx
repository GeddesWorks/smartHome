import "whatwg-fetch";
import "url-polyfill";
import 'core-js/web/url';
import 'core-js/web/url-search-params';
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import eruda from "eruda";

// Enable mobile console for debugging
eruda.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
