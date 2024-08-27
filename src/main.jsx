import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LayoutMain from "./components/layouts/LayoutMain";
import { LoginScreen } from "./pages/login/LoginScreen";
import { SignupScreen } from "./pages/signup/SignupScreen";
import { ProfileScreen } from "./pages/profile/ProfileScreen";
import { SystemAddScreen } from "./pages/systemAdd/SystemAddScreen";
import { MySystemsScreen } from "./pages/mySystems/MySystemsScreen";
import { AuthProvider } from "./components/context/Auth/AuthProvider";
import { InvoicesScreen } from "./pages/invoices/InvoicesScreen";
import { RegisterSystemScreen } from "./pages/registerSystem/RegisterSystemScreen";

import "./assets/css/index.css";
import { SystemsProvider } from "./components/context/Systems/SystemsProvider";
import { PrivateRoute, PublicRoute } from "./components/routes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute element={<LoginScreen />} />,
  },
  {
    index: false,
    element: <PublicRoute element={<SignupScreen />} />,
    path: "/register",
  },
  {
    path: "/",
    element: (
      <PrivateRoute
        element={
          <SystemsProvider>
            <LayoutMain />
          </SystemsProvider>
        }
      />
    ),
    children: [
      {
        element: <PrivateRoute element={<ProfileScreen />} />,
        path: "profile",
      },
      {
        element: <PrivateRoute element={<SystemAddScreen />} />,
        path: "system-add",
      },
      {
        element: <PrivateRoute element={<MySystemsScreen />} />,
        path: "my-systems",
      },
      {
        element: <PrivateRoute element={<InvoicesScreen />} />,
        path: "invoices",
      },
      {
        element: <PrivateRoute element={<RegisterSystemScreen />} />,
        path: "register-system",
      },
      // Otras rutas comentadas...
    ],
  },
  // Otras configuraciones de rutas comentadas...
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
