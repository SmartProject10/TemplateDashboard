import { MainContainer } from "../../components/containers";
import { TitleWithParagraph } from "../../components/ui";
import { SystemRegisterForm } from "./components";

export const RegisterSystemScreen = () => {
  return (
    <>
      <MainContainer>
        <div className="flex flex-col pt-10 pb-5 gap-14">
          <div className="flex flex-col gap-3">
            <TitleWithParagraph
              title="Registra tu sistema"
              paragraph="Para comenzar el proceso de registro, por favor suministra los datos requeridos a continuacion. Esto nos permitira brindarte el mejor servicio y apoyo adaptado a tus necesidades."
            />
          </div>

          <div className="flex flex-col gap-8">
            <h6 className="text-lg text-slate-800 font-medium capitalize">
              Informacion general
            </h6>

            <SystemRegisterForm />
          </div>
        </div>
      </MainContainer>
    </>
  );
};
