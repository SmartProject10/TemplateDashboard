import { useState } from "react";
import toast from "react-hot-toast";

import { SimpleInput } from "../ui/SimpleInput";
import { ButtomSimple } from "../ui/ButtomSimple";

export const PasswordContent = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (password.trim() === "") {
        toast.error("Se requiere contraseña actual");
        setLoading(false);
        return;
      }

      if (newPassword.trim() === "" || confirmPassword.trim() === "") {
        toast.error("Complete todos los campos");
        setLoading(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error("Las contraseñas no coinciden");
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
            label="Contraseña actual"
            name="password"
            type="password"
            placeholder="Ingrese contraseña actual"
            value={password}
            onHandleChange={setPassword}
          />

          <SimpleInput
            label="Nueva contraseña"
            name="password"
            type="password"
            placeholder="Ingrese nueva contraseña"
            value={newPassword}
            onHandleChange={setNewPassword}
          />

          <SimpleInput
            label="Confirmar nueva contraseña"
            name="password"
            type="password"
            placeholder="Confirme nueva contraseña"
            value={confirmPassword}
            onHandleChange={setConfirmPassword}
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
