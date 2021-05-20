import { createContext, useContext } from "react";

const defaultValue = {
  ageCheckedValue: null,
  setAgeChecked: () => {},
};

export const AgeGateContext = createContext(defaultValue);
export const useAgeGate = () => {
  const { ageCheckedValue, setAgeChecked } = useContext(AgeGateContext);
  return [ageCheckedValue, setAgeChecked];
};
export default AgeGateContext;
