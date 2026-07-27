import { RouterProvider } from "@tanstack/react-router";
import { OverlayProvider } from "overlay-kit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryProvider } from "@/app/providers/query-provider";
import { router } from "@/app/router";

import "@/app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <OverlayProvider>
        <RouterProvider router={router} />
      </OverlayProvider>
    </QueryProvider>
  </StrictMode>,
);
