import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { allCities } from "../utils/all-cities";
import { isCityValid } from "./Validation";
import { FunctionalPhoneInput, PhoneInputState } from "./FunctionalPhoneInput";
import { TUserInformation } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const firstNameCharacterErrorMessage =
  "First name must consist of letters only";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const lastNameCharacterErrorMessage = "Last name must consist of letters only";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({handleUserInfo} : {handleUserInfo: (userInformation : TUserInformation) => void;}) => {
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

  const isFirstNameValid = firstNameInput ? firstNameInput.length > 2: false;
  const isFirstNameLettersOnly = firstNameInput ? /^[a-zA-Z]+$/.test(firstNameInput): false;
  const showFirstNameError = isFormSubmitted && !isFirstNameValid;
  const showFirstNameCharacterError =
    isFormSubmitted && !isFirstNameLettersOnly;

  const isLastNameValid = lastNameInput ? lastNameInput.length > 2 : false;
  const isLastNameLettersOnly = lastNameInput ? /^[a-zA-Z]+$/.test(lastNameInput): false;
  const showLastNameError = isFormSubmitted && !isLastNameValid;
  const showLastNameCharacterError = isFormSubmitted && !isLastNameLettersOnly;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(emailInput);
  const showEmailError = isFormSubmitted && !isEmailValid;

  const isPhoneValid =
    phoneInput.length == 4 &&
    phoneInput[0].length == 2 &&
    phoneInput[1].length == 2 &&
    phoneInput[2].length == 2 &&
    phoneInput[3].length == 1;
  const showPhoneError = isFormSubmitted && !isPhoneValid;

  let doesFormHaveErrors = true;
  if (!showFirstNameError && !showFirstNameCharacterError && !showLastNameError && !showLastNameCharacterError && !showEmailError && isCityValid(selectedCity) &&!showPhoneError) {
    doesFormHaveErrors = false;
  }

  /*function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const showEmailError = isFormSubmitted && !isEmailValid;
    return showEmailError;
  }*/

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        if (doesFormHaveErrors) {
          alert('Form has errors.')
        } else {
        handleUserInfo({
          firstName: firstNameInput,
          lastName : lastNameInput,
          email : emailInput,
          city : selectedCity,
          phone : phoneInput
        });
      }
      }}
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input
          placeholder="Bilbo"
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
          value={firstNameInput ?? ''}
        />
      </div>
      <ErrorMessage message={firstNameErrorMessage} show={showFirstNameError} />
      {!showFirstNameError && (
        <ErrorMessage
          message={firstNameCharacterErrorMessage}
          show={showFirstNameCharacterError}
        />
      )}

      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input
          placeholder="Baggins"
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
          value={lastNameInput ?? ""}
        />
      </div>
      <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />
      {!showLastNameError && (
        <ErrorMessage
          message={lastNameCharacterErrorMessage}
          show={showLastNameCharacterError}
        />
      )}

      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => {
            setEmailInput(e.target.value);
            //validateEmail(email);
          }}
          value={emailInput ?? ""}
        />
      </div>
      <ErrorMessage message={emailErrorMessage} show={showEmailError} />

      {/* City Input */}
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          type="text"
          placeholder="Hobbiton"
          value={selectedCity ?? ""}
          onChange={(e) => setSelectedCity(e.target.value)}
          list="options"
        />
        <datalist id="options">
          {allCities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
      </div>
      <ErrorMessage
        message={cityErrorMessage}
        show={ !isCityValid(selectedCity) && isFormSubmitted}
      />

      <FunctionalPhoneInput
        phoneInputState={phoneInput || (['','','',''] as PhoneInputState)} 
        setPhoneInputState={setPhoneInput}
      />

      <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />

      <input type="submit" value="Submit" />
    </form>
  );
};
