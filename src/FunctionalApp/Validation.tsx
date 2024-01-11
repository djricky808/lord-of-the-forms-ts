import { allCities } from "../utils/all-cities";

export function validateEmail (email:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  
  return 
  ;
}

export function isCityValid (input: string) {
  if (allCities.includes(input.charAt(0).toUpperCase()+input.slice(1))) {
    return true;
  } else {
    return false;
  }
}
