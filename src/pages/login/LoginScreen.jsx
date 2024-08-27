import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { ButtomSimple, GoogleButton, SimpleInput } from "../../components/ui";
import { LayoutLogin } from "../../components/layouts/LayoutLogin";
import { containsScript } from "../../utils/functions";
import { authContext } from "../../components/context/Auth/AuthProvider";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleLogin } = useContext(authContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      if (email.trim() === "" || password.trim() === "") {
        toast.error("Todos los campos son obligatorios");
        setLoading(false);
        return;
      }

      if (containsScript(email) || containsScript(password)) {
        toast.error("No se permiten scripts en los campos");
        setLoading(false);
        return;
      }

      // Aquí se debe hacer la petición al servidor para iniciar sesión
      const response = await handleLogin(email, password);

      if (!response) {
        toast.error("Ocurrió un error al iniciar sesión");
        setLoading(false);
        return;
      }

      toast.success("Inicio de sesión exitoso");
      setLoading(false);
      navigate("/system-add");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      toast.error("Ocurrió un error al iniciar sesión");
      setLoading(false);
    }
  };

  return (
    <>
      <LayoutLogin title="Iniciar sesión">
        <div className="flex flex-col gap-2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

            <ButtomSimple
              type="submit"
              text="Iniciar sesión"
              disabled={loading}
              loading={loading}
            />
          </form>
          <GoogleButton />
        </div>
      </LayoutLogin>
    </>
  );
};
