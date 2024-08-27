import { useContext } from "react";
import { CiViewList } from "react-icons/ci";

import { ButtonWithIcon } from "../../../components/ui";
import { systemsContext } from "../../../components/context/Systems";

export const SystemItemTable = ({ iso, buyDate, expirationDate, mode }) => {
  const { handleChangeRecordModal } = useContext(systemsContext);

  const handleClickRecord = (system) => {
    console.log("Historial", system);
    handleChangeRecordModal();
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 font-medium">{iso}</td>
        <td className="py-3 px-6 font-medium">{buyDate}</td>
        <td className="py-3 px-6 font-medium">{expirationDate}</td>
        <td className="py-3 px-6 font-medium">{mode}</td>

        <td className="py-3 px-6">
          <div className="flex gap-2">
            <ButtonWithIcon
              text="Historial"
              icon={CiViewList}
              btnStyles="bg-gray-400 hover:bg-gray-500 rounded-xl text-white font-medium"
              onHandleClick={() => handleClickRecord(iso)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};
