import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { initStateSystem, systemsReducer } from "./systemsReducer";
import { isos } from "../../../utils/const";

// eslint-disable-next-line react-refresh/only-export-components
export const systemsContext = createContext();

export const SystemsProvider = ({ children }) => {
  const [checkedSystems, setCheckedSystems] = useState({});
  const [loadingSystems, setLoadingSystems] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const [state, dispatch] = useReducer(systemsReducer, initStateSystem);

  const navigate = useNavigate();

  const handleSelectedCountry = (country) =>
    dispatch({ type: "SET_COUNTRY", payload: country });

  const handleGetSystems = async () => {
    try {
      setLoadingSystems(true);

      // Simulando una petición a una API
      setTimeout(() => {
        dispatch({ type: "SET_SYSTEMS", payload: isos });
        setLoadingSystems(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoadingSystems(false);
    }
  };

  const handleSystemCheckboxChange = (id) => {
    setCheckedSystems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSystemBuy = () => {
    setLoadingBuy(true);

    const keysString = Object.keys(checkedSystems);

    const system = keysString.map((key) => ({
      iso: key,
      buyDate: new Date().toLocaleDateString(),
      expirationDate: new Date().toLocaleDateString(),
      mode: "Comprado",
    }));

    setTimeout(() => {
      dispatch({ type: "SET_SELECTED_SYSTEMS", payload: system });
      toast.success("Compra realizada con exito");
      setLoadingBuy(false);
      navigate("/my-systems");
    }, 2000);
  };

  const isosMemo = useMemo(() => {
    return state.systems.sort((a, b) => {
      const [numA, yearA] = a.split("-").map(Number);
      const [numB, yearB] = b.split("-").map(Number);

      if (numA === numB) {
        return yearA - yearB;
      }
      return numA - numB;
    });
  }, [state.systems]);

  useEffect(() => {
    if (state.systems.length === 0) {
      handleGetSystems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <systemsContext.Provider
      value={{
        loadingSystems,
        systems: isosMemo,
        loadingBuy,
        selectedSystems: state.selectedSystems,
        checkedSystems,
        selectedCountry: state.country,
        handleSelectedCountry,
        handleSystemBuy,
        handleSystemCheckboxChange,
      }}
    >
      {children}
    </systemsContext.Provider>
  );
};
