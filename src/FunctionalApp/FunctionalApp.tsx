import { ProfileInformation } from "../ProfileInformation";
import { TUserInformation } from "../types";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";

export const FunctionalApp = () => {
  const [userInformation, setUserInformation] = useState<TUserInformation | null>(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInformation} />
      <FunctionalForm
        handleUserInfo={(userInformation) =>
          setUserInformation(userInformation)
        }
      />
    </>
  );
};
