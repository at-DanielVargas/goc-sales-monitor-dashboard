import React from "react";
import ReactDOM from "react-dom/client";
import { IoProvider } from "socket.io-react-hook";
import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import { Layouts } from "./components/layouts";
import { Pages } from "./components/pages";

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts.App />,
    children: [
      {
        path: "/",
        element: <Pages.Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Pages.Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IoProvider>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </IoProvider>
  </React.StrictMode>
);
