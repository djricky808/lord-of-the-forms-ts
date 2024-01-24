import { TextInputProps } from "../types";

export const FunctionalEmailInput = ({textInput, setTextInput, placeholder, label}: TextInputProps) => {
return (<div className="input-wrap">
  <label>{label}:</label>
  <input
    placeholder={placeholder}
    onChange={(e) => {
      setTextInput?.(e.target.value);
    }}
    value={textInput ?? ""}
  />
</div>)};
