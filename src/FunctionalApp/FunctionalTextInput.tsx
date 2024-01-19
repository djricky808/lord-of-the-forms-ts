import { isALetter } from "../utils/validations";

export const FunctionalTextInput = ({
  nameInput,
  setNameInput,
  placeholder,
  label,
}: {
  nameInput: string;
  setNameInput: (nameInput: string) => void;
  placeholder: string;
  label: string;
}) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          if (
            e.target.value.match(isALetter) ||
            e.target.value.length < nameInput.length
          ) {
            setNameInput(e.target.value);
          }
        }}
        value={nameInput ?? ""}
      />
    </div>
  );
};
