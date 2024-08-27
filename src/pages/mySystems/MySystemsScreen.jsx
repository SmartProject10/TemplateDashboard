import { useContext } from "react";

import { systemsContext } from "../../components/context/Systems";

import { MainContainer } from "../../components/containers";
import { MainTable } from "../../components/ui";
import { theadDataMySystems } from "../../utils/const";

export const MySystemsScreen = () => {
  const { selectedSystems } = useContext(systemsContext);

  return (
    <>
      <MainContainer>
        <div className="flex flex-col pt-10 pb-5 gap-14">
          <h2 className="text-blue-900 text-3xl font-medium">
            {selectedSystems && selectedSystems.length > 0
              ? "Sistemas adquiridos"
              : "No tienes sistemas adquiridos"}
          </h2>

          {selectedSystems && selectedSystems.length > 0 && (
            <MainTable theadData={theadDataMySystems}>
              {selectedSystems.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 font-medium">{data.iso}</td>
                  <td className="py-3 px-6 font-medium">{data.buyDate}</td>
                  <td className="py-3 px-6 font-medium">
                    {data.expirationDate}
                  </td>
                  <td className="py-3 px-6 font-medium">{data.mode}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <button>Historial</button>
                    </div>
                  </td>
                </tr>
              ))}
            </MainTable>
          )}
        </div>
      </MainContainer>
    </>
  );
};
