import { PhoneInputState } from "../types"

export const capitalize = (text: string) => {
    // todo: build this function
    // `capitalize("jOn")` should output `"Jon"`
    return text.slice(0,1).toUpperCase()+ text.slice(1)
}

export const formatPhoneNumber = (number: PhoneInputState) => {
    // todo: build this function
    // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
    return `${number[0]}-${number[1]}-${number[2]}-${number[3]}`;
}