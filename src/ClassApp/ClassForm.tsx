import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isEmailValid, isCityValid, isPhoneValid } from "../utils/validations";
import { ClassPhoneInput } from "./ClassPhoneInput";
import { PhoneInputState, TUserInformation } from "../types";
import { ClassTextInput } from "./ClassTextInput";
import { ClassEmailInput } from "./ClassEmailInput";
import { ClassCityInput } from "./ClassCityInput";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

interface UserInformationProps {
  userInformation: TUserInformation | null;
  handleUserInfo: (userInformation: TUserInformation) => void;
}

export class ClassForm extends Component<UserInformationProps> {
  state = {
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    selectedCity: "",
    phoneInput: ["", "", "", ""],
    isFormSubmitted: false,
  };

  render() {
    const {
      firstNameInput,
      lastNameInput,
      emailInput,
      selectedCity,
      phoneInput,
      isFormSubmitted,
    } = this.state;

    const isFirstNameValid = firstNameInput ? firstNameInput.length > 1 : false;
    const showFirstNameError = isFormSubmitted && !isFirstNameValid;

    const isLastNameValid = lastNameInput ? lastNameInput.length > 1 : false;
    const showLastNameError = isFormSubmitted && !isLastNameValid;

    const handlePhoneInputChange = (newState: PhoneInputState) => {
      this.setState({ phoneInput: newState });
    };

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
          this.setState({
            isFormSubmitted: true,
          });
          if (doesFormHaveErrors) {
            alert("Bad Inputs");
          } else {
            this.props.handleUserInfo({
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
        <ClassTextInput
          textInput={firstNameInput}
          label="First Name"
          placeholder="Bilbo"
          setTextInput={(input) => this.setState({ firstNameInput: input })}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />

        {/* last name input */}
        <ClassTextInput
          textInput={lastNameInput}
          label="Last Name"
          placeholder="Baggins"
          setTextInput={(input) => this.setState({ lastNameInput: input })}
        />
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

        {/* Email Input */}
        <ClassEmailInput
          textInput={emailInput}
          label="Email"
          placeholder="bilbo-baggins@adventurehobbits.net"
          setTextInput={(value) => this.setState({ emailInput: value })}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={!isEmailValid(emailInput) && isFormSubmitted}
        />

        {/* City Input */}
        <ClassCityInput
          textInput={selectedCity}
          label="City"
          placeholder="Hobbiton"
          setTextInput={(input) => this.setState({ selectedCity: input })}
        />
        <ErrorMessage
          message={cityErrorMessage}
          show={!isCityValid(selectedCity) && isFormSubmitted}
        />

        <ClassPhoneInput
          phoneInputState={phoneInput}
          handlePhoneInputChange={handlePhoneInputChange}
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={!isPhoneValid(phoneInput) && isFormSubmitted}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
