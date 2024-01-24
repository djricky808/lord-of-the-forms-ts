import { TextInputProps } from "../types";
import { isALetter } from "../utils/validations";

export const FunctionalTextInput = ({
  textInput,
  setTextInput,
  placeholder,
  label,
}: TextInputProps) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          if (
            e.target.value.match(isALetter) ||
            e.target.value.length < textInput.length
          )
            setTextInput?.(e.target.value);
        }}
        value={textInput ?? ""}
      />
    </div>
  );
};
