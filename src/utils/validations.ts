export const isALetter = /^[A-Za-z]+$/;

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}
import { PhoneInputState } from "../types";
import { allCities } from "./all-cities";

export function isCityValid(input: string) {
  if (allCities.includes(input.charAt(0).toUpperCase() + input.slice(1))) {
    return true;
  } else {
    return false;
  }
}

export const isPhoneValid = (phoneInput: PhoneInputState) => {
  if (
    phoneInput.length == 4 &&
    phoneInput[0].length == 2 &&
    phoneInput[1].length == 2 &&
    phoneInput[2].length == 2 &&
    phoneInput[3].length == 1
  ) {
    return true;
  } else {
    return false;
  }
};
