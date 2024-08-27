export const initStateSystem = {
  country: "",
  systems: [],
  selectedSystems: [],
};

export const systemsReducer = (state = initStateSystem, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };

    case "SET_SYSTEMS":
      return {
        ...state,
        systems: action.payload,
      };
    case "SET_SELECTED_SYSTEMS":
      return {
        ...state,
        selectedSystems: action.payload,
      };
    default:
      return state;
  }
};
