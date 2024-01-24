import { Component } from "react";
import { TextInputProps } from "../types";
import { allCities } from "../utils/all-cities";

export class ClassCityInput extends Component<TextInputProps> {
  render() {
    const { textInput, label, placeholder, setTextInput } = this.props;
    return (
      <div className="input-wrap">
        <label>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          value={textInput ?? ""}
          onChange={(e) => {
            console.log(e.target.value);
            setTextInput?.(e.target.value);
          }}
          list="options"
        />
        <datalist id="options">
          {allCities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
      </div>
    );
  }
}
