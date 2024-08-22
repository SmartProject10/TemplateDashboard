import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/pagesWeb/Home";
import LayoutMain from "./components/layouts/LayoutMain";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginScreen } from "./pages/login/LoginScreen";

// contexts
// loaders

// layout de rutas protegidas
// import ProtectedRoutes from './components/protected/ProtectedRoutes';
// import Us from './pages/pagesWeb/Us';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Home />,
        path: "/",
      },
      {
        index: true,
        element: <LoginScreen />,
        path: "/login",
      },
      // Otras rutas comentadas...
    ],
  },
  // Otras configuraciones de rutas comentadas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
