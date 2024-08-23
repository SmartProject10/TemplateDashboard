import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoIso from "../../assets/img/isologo.png";
import BackgrounLogin from "../../assets/img/login.jpg";

export const LayoutLogin = ({ title, children }) => {
  const { pathname } = useLocation();

  const showLinkRegister = useMemo(
    () => () => {
      if (pathname === "/login") {
        return (
          <span className="text-gray-500 text-sm">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-800">
              Regístra tu empresa
            </Link>
          </span>
        );
      }

      return (
        <span className="text-gray-500 text-sm">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-800">
            Inicia sesión
          </Link>
        </span>
      );
    },
    [pathname]
  );

  return (
    <>
      <div className="h-screen px-10 md:px-0 grid place-items-center">
        <div className="w-full md:w-[600px] bg-white flex flex-row shadow-lg rounded-lg">
          {/* image login */}
          <div className="relative hidden md:flex flex-1">
            <div
              className={`w-full ${
                pathname === "/login" ? "h-[500px]" : "h-[560px]"
              }`}
            >
              <img
                src={BackgrounLogin}
                alt="background"
                className="object-cover w-full h-full rounded-l-lg"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-l-lg" />

            <div className="absolute top-0 left-0 flex flex-row justify-start items-center gap-2 px-3 py-6">
              <img src={LogoIso} alt="logo" className="w-16" />
              <h1 className="text-white text-xl font-bold">ISO and ISO</h1>
            </div>
          </div>

          {/* form login */}
          <div className="flex flex-col justify-between flex-1 gap-10 px-6 py-5">
            <h1 className="text-blue-900 text-2xl font-bold text-center">
              {title}
            </h1>

            {children}

            {showLinkRegister()}
          </div>
        </div>
      </div>
    </>
  );
};
