import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/pagesWeb/Home";
import LayoutMain from "./components/layouts/LayoutMain";
import { LoginScreen } from "./pages/login/LoginScreen";
import { SignupScreen } from "./pages/signup/SignupScreen";

import "./assets/css/index.css";
import { ProfileScreen } from "./pages/profile/ProfileScreen";

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
        index: false,
        element: <LoginScreen />,
        path: "/login",
      },
      {
        index: false,
        element: <SignupScreen />,
        path: "/register",
      },
      {
        index: false,
        element: <ProfileScreen />,
        path: "/profile",
      },
      // Otras rutas comentadas...
    ],
  },
  // Otras configuraciones de rutas comentadas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
