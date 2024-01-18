import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { isEmailValid, isCityValid } from "../utils/validations";
import { ClassPhoneInput } from "./ClassPhoneInput";
import { PhoneInputState, TUserInformation } from "../types";

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
    const isALetter = /^[A-Za-z]+$/;

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
    const isPhoneValid =
      phoneInput.length == 4 &&
      phoneInput[0].length == 2 &&
      phoneInput[1].length == 2 &&
      phoneInput[2].length == 2 &&
      phoneInput[3].length == 1;
    const showPhoneError = isFormSubmitted && !isPhoneValid;

    let doesFormHaveErrors = true;
    if (
      !showFirstNameError &&
      !showLastNameError &&
      isEmailValid(emailInput) &&
      isCityValid(selectedCity) &&
      !showPhoneError
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
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input
            placeholder="Bilbo"
            onChange={(e) => {
              if (
                e.target.value.match(isALetter) ||
                e.target.value.length < firstNameInput.length
              ) {
                this.setState({ firstNameInput: e.target.value });
              }
            }}
            value={firstNameInput ?? ""}
          />
        </div>
        <ErrorMessage
          message={firstNameErrorMessage}
          show={showFirstNameError}
        />

        {/* last name input */}
        <div className="input-wrap">
          <label>{"Last Name"}:</label>
          <input
            placeholder="Baggins"
            onChange={(e) => {
              if (
                e.target.value.match(isALetter) ||
                e.target.value.length < lastNameInput.length
              ) {
                this.setState({ lastNameInput: e.target.value });
              }
            }}
            value={lastNameInput ?? ""}
          />
        </div>
        <ErrorMessage message={lastNameErrorMessage} show={showLastNameError} />

        {/* Email Input */}
        <div className="input-wrap">
          <label>{"Email"}:</label>
          <input
            placeholder="bilbo-baggins@adventurehobbits.net"
            onChange={(e) => {
              this.setState({ emailInput: e.target.value });
              isEmailValid(emailInput);
            }}
          />
        </div>
        <ErrorMessage
          message={emailErrorMessage}
          show={!isEmailValid(emailInput) && isFormSubmitted}
        />

        {/* City Input */}
        <div className="input-wrap">
          <label>{"City"}:</label>
          <input
            type="text"
            placeholder="Hobbiton"
            value={selectedCity ?? ""}
            onChange={(e) => this.setState({ selectedCity: e.target.value })}
            list="options"
          />
        </div>
        <ErrorMessage
          message={cityErrorMessage}
          show={!isCityValid(selectedCity) && isFormSubmitted}
        />

        <ClassPhoneInput
          phoneInputState={phoneInput}
          handlePhoneInputChange={handlePhoneInputChange}
        />

        <ErrorMessage message={phoneNumberErrorMessage} show={showPhoneError} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
