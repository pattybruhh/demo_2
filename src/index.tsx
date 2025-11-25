import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeNewUser } from "./screens/HomeNewUser";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeNewUser />
  </StrictMode>,
);
