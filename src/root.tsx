import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./root.css";
import { Top } from "./page/top/main.tsx";

document.title = "AtRateGraph";

function Root() {
  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </HashRouter>
    </StrictMode>
  );
}
createRoot(document.getElementById("root")!).render(<Root />);
