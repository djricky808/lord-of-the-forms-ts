import { allCities } from "../utils/all-cities";

export const FunctionalCityInput = ({
  label,
  placeholder,
  selectedCity,
  setSelectedCity,
}: {
  label: string;
  placeholder: string;
  selectedCity: string;
  setSelectedCity: (selectedCity: string) => void;
}) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        value={selectedCity ?? ""}
        onChange={(e) => setSelectedCity(e.target.value)}
        list="options"
      />
      <datalist id="options">
        {allCities.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>
    </div>
  );
};
