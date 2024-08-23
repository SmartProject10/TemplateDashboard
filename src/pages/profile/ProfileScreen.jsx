import { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleUser } from "react-icons/fa6";

import { ButtomSimple, SimpleInput } from "../../components/ui";
import { containsScript } from "../../utils/functions";

export const ProfileScreen = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("");
  const [verifyPassword, setverifyPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      if (
        email.trim() === "" ||
        password.trim() === "" ||
        verifyPassword.trim() === ""
      ) {
        toast.error("Todos los campos son obligatorios");
        setLoading(false);
        return;
      }

      if (
        containsScript(email) ||
        containsScript(password) ||
        containsScript(verifyPassword)
      ) {
        toast.error("No se permiten scripts en los campos");
        setLoading(false);
        return;
      }

      if (password !== verifyPassword) {
        toast.error("Las contraseñas no coinciden");
        setLoading(false);
        return;
      }

      toast.success("Datos actualizados correctamente");
      setLoading(false);
    } catch (error) {
      toast.error("Ocurrió un error al registrar empresa");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen grid place-content-center">
        <div className="bg-white w-[600px] shadow-lg rounded-lg p-4">
          <h1 className="text-2xl font-bold text-center">
            Editar datos de perfil
          </h1>
          <FaCircleUser className="text-blue-800 mx-auto mt-3" size={50} />

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
            <SimpleInput
              label="Verificar contraseña"
              type="password"
              name="verifyPassword"
              placeholder="******"
              value={verifyPassword}
              onHandleChange={setverifyPassword}
            />

            <ButtomSimple
              type="submit"
              text="Guardar"
              disabled={loading}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </>
  );
};
