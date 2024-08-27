import { useContext } from "react";

import { systemsContext } from "../../components/context/Systems";
import { MainContainer } from "../../components/containers";
import {
  ButtomSimple,
  CountrySelector,
  CustomCheckbox,
  GeneralOvalLoading,
  ObligatoryTitle,
  TitleWithParagraph,
} from "../../components/ui";

export const SystemAddScreen = () => {
  const {
    loadingSystems,
    systems,
    loadingBuy,
    handleSystemBuy,
    checkedSystems,
    selectedCountry,
    handleSelectedCountry,
    handleSystemCheckboxChange,
  } = useContext(systemsContext);

  return (
    <>
      <MainContainer>
        <div className="flex flex-col pt-10 pb-5 gap-14">
          {loadingSystems && systems.length === 0 ? (
            <div className="h-full md:h-[calc(100vh-200px)] flex flex-col justify-center items-center">
              <GeneralOvalLoading />
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <TitleWithParagraph
                  title="Compra de sistemas"
                  paragraph="Para comenzar, por favor seleccione su pais de origen y las
                    normas ISO que desea adquirir.Esto nos permitira ofrecerle
                    informacion y servicios personalizados, adaptados a sus
                    necesidades especificas y al entorno regulatorio de su
                    regios."
                />
              </div>

              <div className="flex flex-col gap-3">
                <ObligatoryTitle title="Seleccione su pais" />

                <div className="w-full md:w-72">
                  <CountrySelector
                    countryValue={selectedCountry}
                    onHandleChangeCountry={handleSelectedCountry}
                  />
                </div>
              </div>

              {selectedCountry !== "" && (
                <>
                  <div className="flex flex-col gap-5">
                    <ObligatoryTitle title="Seleccione los ISO" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {systems.map((iso) => (
                        <div key={iso} className="flex">
                          <CustomCheckbox
                            id={iso}
                            label={iso}
                            checked={checkedSystems[iso] || false}
                            onChange={() => handleSystemCheckboxChange(iso)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-32 flex flex-row justify-start items-start">
                    <ButtomSimple
                      text="Comprar"
                      type="button"
                      disabled={loadingBuy}
                      loading={loadingBuy}
                      onHandleClick={handleSystemBuy}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </MainContainer>
    </>
  );
};
