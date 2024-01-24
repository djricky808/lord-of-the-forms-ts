import { Component } from "react";
import { TextInputProps } from "../types";

export class ClassEmailInput extends Component<TextInputProps> {
  render() {
    const { textInput, label, placeholder, setTextInput } = this.props;

    return (
      <div className="input-wrap">
        <label>{label}:</label>
        <input
          placeholder={placeholder}
          onChange={(e) => {
            setTextInput?.(e.target.value);
          }}
          value={textInput}
        />
      </div>
    );
  }
}
