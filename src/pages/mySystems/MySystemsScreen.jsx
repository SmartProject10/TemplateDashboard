import { useContext } from "react";

import { systemsContext } from "../../components/context/Systems";

import { MainContainer } from "../../components/containers";
import {
  ButtonWithIcon,
  DialogSimple,
  MainTable,
  TitleWithParagraph,
} from "../../components/ui";
import { theadDataMySystems } from "../../utils/const";
import { SystemItemTable } from "./components/SystemItemTable";
import { RecordContent } from "../../components/modalContent";

export const MySystemsScreen = () => {
  const { selectedSystems, showRecordModal, handleChangeRecordModal } =
    useContext(systemsContext);

  return (
    <>
      <MainContainer>
        <div className="flex flex-col pt-10 pb-5 gap-14">
          <TitleWithParagraph
            title={
              selectedSystems && selectedSystems.length > 0
                ? "Sistemas adquiridos"
                : "No tienes sistemas adquiridos"
            }
          />

          {selectedSystems && selectedSystems.length > 0 && (
            <MainTable theadData={theadDataMySystems}>
              {selectedSystems.map((data, index) => (
                <SystemItemTable key={index} {...data} />
              ))}
            </MainTable>
          )}
        </div>
      </MainContainer>

      <DialogSimple
        isOpen={showRecordModal}
        title={`Historial sistema - 2123`}
        onHandleClose={handleChangeRecordModal}
      >
        <RecordContent />
      </DialogSimple>
    </>
  );
};
