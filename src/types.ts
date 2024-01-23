export type PhoneInputState = string[];

export type TUserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: PhoneInputState;
};


export type TextInputProps ={
  placeholder:string;
  textInput: string;
  setTextInput: (textInput:string) => void;
  label: string;
}