import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import App from "./app/App";
import { ThemeProvider } from "./context/ThemeContext";
import { AppWrapper } from "./app/layout/PageMeta";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppWrapper>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppWrapper>
  </React.StrictMode>
);

