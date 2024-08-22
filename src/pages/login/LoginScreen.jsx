import { useState } from "react";
import { SimpleInput } from "../../components/ui";

import LogoIso from "../../assets/isologo.png";
import BackgrounLogin from "../../assets/login.jpg";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="bg-white flex flex-row shadow-lg rounded-lg">
          {/* image login */}
          <div className="relative flex flex-1">
            <div className="h-[500px]">
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
              Iniciar sesión
            </h1>

            <form className="flex flex-col gap-4">
              <SimpleInput
                label="Email"
                type="email"
                name="email"
                placeholder="Ingrese email"
                value={email}
                onHandleChange={setEmail}
              />
              <SimpleInput
                label="Contraseña"
                type="password"
                name="password"
                placeholder="******"
                value={password}
                onHandleChange={setPassword}
              />

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-2">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember" className="text-gray-500">
                    Recordar
                  </label>
                </div>

                <a href="#" className="text-blue-800 text-sm">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button
                type="submit"
                className="rounded-md bg-blue-800 text-white p-2 transition hover:bg-teal-700"
              >
                Iniciar sesión
              </button>
            </form>

            <span className="text-gray-500 text-sm">
              ¿No tienes cuenta?{" "}
              <a href="#" className="text-blue-800">
                Regístrate
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
