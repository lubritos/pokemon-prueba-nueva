import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const strictMode = process.env.NODE_ENV === 'production';

root.render(
  (strictMode && <StrictMode>
    <App />
  </StrictMode>) || <App />
);
