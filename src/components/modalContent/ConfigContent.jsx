import { useState } from "react";
import toast from "react-hot-toast";

import { SimpleInput } from "../ui/SimpleInput";
import { ButtomSimple } from "../ui/ButtomSimple";

export const ConfigContent = () => {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (email.trim() === "") {
        toast.error("Se requiere el email actual");
        setLoading(false);
        return;
      }

      if (newEmail.trim() === "") {
        toast.error("Se requiere el nuevo email");
        setLoading(false);
        return;
      }

      if (newEmail.trim() === email.trim()) {
        toast.error("El nuevo email no puede ser igual al actual");
        setLoading(false);
        return;
      }

      if (password.trim() === "") {
        toast.error("Debe confirmar con su contraseña");
        setLoading(false);
        return;
      }

      toast.success("Guardado correctamente");
      setLoading(false);
    } catch (error) {
      toast.error("Error al guardar");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-80">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <SimpleInput
            label="Email actual"
            name="email"
            type="email"
            placeholder="Ingrese email actual"
            value={email}
            onHandleChange={setEmail}
          />

          <SimpleInput
            label="Nuevo email"
            name="newEmail"
            type="email"
            placeholder="Ingrese nuevo email"
            value={newEmail}
            onHandleChange={setNewEmail}
          />

          <SimpleInput
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Confirmar contraseña"
            value={password}
            onHandleChange={setPassword}
          />

          <ButtomSimple
            text="Guardar"
            type="submit"
            disabled={loading}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
};
