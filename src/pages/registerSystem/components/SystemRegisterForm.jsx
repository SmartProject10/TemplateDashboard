import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { systemsContext } from "../../../components/context/Systems";

import { GridContainer } from "./GridContainer";
import {
  ButtomSimple,
  SimpleInput,
  SimpleSelect,
} from "../../../components/ui";

export const SystemRegisterForm = () => {
  // const [first, setfirst] = useState(second);
  const [loading, setloading] = useState(false);

  const { handleRegisterSystem } = useContext(systemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    setTimeout(() => {
      setloading(false);

      handleRegisterSystem();

      toast.success("Sistema registrado correctamente");
    }, 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <GridContainer>
            <SimpleInput
              label="Razon social"
              name="companyName"
              placeholder="La gran campana"
              type="text"
              required
              info
            />
            <SimpleInput
              label="RUC"
              name="ruc"
              placeholder="1234567878"
              type="number"
              required
              info
            />
          </GridContainer>

          <div className="grid grid-cols-1">
            <SimpleInput
              label="Direccion"
              name="address"
              placeholder="Nombre de la calle"
              type="text"
              required
            />
          </div>

          <GridContainer>
            <SimpleSelect
              label="Ciudad"
              name="city"
              placeholder="Seleccione ciudad"
              required
            />

            <SimpleSelect
              label="Estado/Provincia"
              name="state"
              placeholder="Seleccione estado"
              required
            />
          </GridContainer>

          <GridContainer>
            <SimpleInput
              label="Codigo postal"
              name="statusCode"
              placeholder="Código postal de la localidad"
              type="text"
            />

            <SimpleSelect
              label="Tamaño de la empresa"
              name="sizeCompany"
              placeholder="Seleccione tamaño"
              required
            />
          </GridContainer>

          <div className="w-32 flex flex-row justify-start items-start">
            <ButtomSimple
              text="Registrar"
              type="submit"
              disabled={loading}
              loading={loading}
              onHandleClick={() => {}}
            />
          </div>
        </div>
      </form>
    </>
  );
};
