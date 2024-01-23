import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isCityValid, isPhoneValid } from "../utils/validations";
import { FunctionalTextInput } from "./FunctionalTextInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { PhoneInputState, TUserInformation } from "../types";
import { isEmailValid } from "../utils/validations";
import { FunctionalEmailInput } from "./FunctionalEmailInput";
import { FunctionalCityInput } from "./FunctionalCityInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  handleUserInfo,
}: {
  handleUserInfo: (userInformation: TUserInformation) => void;
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [phoneInput, setPhoneInput] = useState<PhoneInputState>([
    "",
    "",
    "",
    "",
  ]);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isFirstNameValid = firstNameInput ? firstNameInput.length > 2 : false;
  const showFirstNameError = isFormSubmitted && !isFirstNameValid;

  const isLastNameValid = lastNameInput ? lastNameInput.length > 2 : false;
  const showLastNameError = isFormSubmitted && !isLastNameValid;

  let doesFormHaveErrors = true;
  if (
    !showFirstNameError &&
    !showLastNameError &&
    isEmailValid(emailInput) &&
    isCityValid(selectedCity) &&
    isPhoneValid(phoneInput)
  ) {
    doesFormHaveErrors = false;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        if (doesFormHaveErrors) {
          alert("Bad Inputs.");
        } else {
          handleUserInfo({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: selectedCity,
            phone: phoneInput,
          });
        }
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <FunctionalTextInput
        textInput={firstNameInput}
        setTextInput={setFirstNameInput}
        placeholder="Bilbo"
        label="First Name"
      />
      <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />

      {/* last name input */}
      <FunctionalTextInput
        textInput={lastNameInput}
        setTextInput={setLastNameInput}
        placeholder="Baggins"
        label="Last Name"
      />
      <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

      {/* Email Input */}
      <FunctionalEmailInput
        textInput={emailInput}
        setTextInput={setEmailInput}
        placeholder="bilbo-baggins@adventurehobbits.net"
        label="Email"
      />
      <ErrorMessage
        message={emailErrorMessage}
        show={!isEmailValid(emailInput) && isFormSubmitted}
      />

      {/* City Input */}
  
      <FunctionalCityInput
        label="City"
        placeholder="Hobbiton"
        textInput={selectedCity}
        setTextInput={setSelectedCity}
      />
      <ErrorMessage
        message={cityErrorMessage}
        show={!isCityValid(selectedCity) && isFormSubmitted}
      />

      <FunctionalPhoneInput
        phoneInputState={phoneInput || (["", "", "", ""] as PhoneInputState)}
        setPhoneInputState={setPhoneInput}
      />

      <ErrorMessage
        message={phoneNumberErrorMessage}
        show={!isPhoneValid(phoneInput) && isFormSubmitted}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
