import { TextInputProps } from "../types";
import { Component } from "react";
import { isALetter } from "../utils/validations";

export class ClassTextInput extends Component<TextInputProps> {
  render() {
    const { textInput, label, placeholder, setTextInput } = this.props;
    return (
      <div className="input-wrap">
        <label>{label}:</label>
        <input
          placeholder={placeholder}
          onChange={(e) => {
            if (
              e.target.value.match(isALetter) ||
              e.target.value.length < textInput.length
            ) {
              setTextInput?.(e.target.value);
            }
          }}
          value={textInput ?? ""}
        />
      </div>
    );
  }
}
