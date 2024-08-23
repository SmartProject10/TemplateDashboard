import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { LayoutLogin } from "../../components/layouts/LayoutLogin";
import { ButtomSimple, SimpleInput, SpinnerSimple } from "../../components/ui";
import { containsScript } from "../../utils/functions";

export const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setverifyPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      if (
        email.trim() === "" ||
        phone.trim() === "" ||
        password.trim() === "" ||
        verifyPassword.trim() === ""
      ) {
        toast.error("Todos los campos son obligatorios");
        setLoading(false);
        return;
      }

      if (
        containsScript(email) ||
        containsScript(phone) ||
        containsScript(password)
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

      toast.success("Registro exitoso");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("Ocurrió un error al registrar empresa");
      setLoading(false);
    }
  };

  return (
    <>
      <LayoutLogin title="Registrar Empresa">
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
            label="Celular"
            type="text"
            name="phone"
            placeholder="Ingrese numero telefonico"
            value={phone}
            onHandleChange={setPhone}
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
            text="Crear"
            disabled={loading}
            loading={loading}
          />
        </form>
      </LayoutLogin>
    </>
  );
};
