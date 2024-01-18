export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}
import { allCities } from "./all-cities";

export function isCityValid(input: string) {
  if (allCities.includes(input.charAt(0).toUpperCase() + input.slice(1))) {
    return true;
  } else {
    return false;
  }
}
