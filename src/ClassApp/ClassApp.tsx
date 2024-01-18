import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { TUserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";
type State = { userInformation: TUserInformation | null };

export class ClassApp extends Component<Record<string, never>, State> {
  state = {
    userInformation: null,
  };
  handleUserInfo = (userInformation: TUserInformation) => {
    this.setState({ userInformation });
  };

  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userInformation} />
        <ClassForm
          userInformation={this.state.userInformation}
          handleUserInfo={this.handleUserInfo}
        />
      </>
    );
  }
}
