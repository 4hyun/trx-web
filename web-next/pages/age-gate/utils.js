import { AGE_KEY } from "./constants";
export const getAgeCheckValue = () => {
  try {
    let { localStorage } = window;
    return localStorage.getItem(AGE_KEY);
  } catch (error) {
    console.error(error.message);
    return;
  }
};
export const setAgeCheckValue = () => {
  try {
    let { localStorage } = window;
    localStorage.setItem(AGE_KEY, new Date().getTime());
  } catch (error) {
    console.error(error.message);
    return;
  }
};
