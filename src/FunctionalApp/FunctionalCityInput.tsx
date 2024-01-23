import { TextInputProps } from "../types";
import { allCities } from "../utils/all-cities";

export const FunctionalCityInput = ({label,placeholder, textInput, setTextInput} : TextInputProps) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        value={textInput ?? ""}
        onChange={(e) => setTextInput(e.target.value)}
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