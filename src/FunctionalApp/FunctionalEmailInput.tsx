export const FunctionalEmailInput = ({
  emailInput,
  setEmailInput,
  placeholder,
  label
}: {
  emailInput: string;
  setEmailInput: (emailInput: string) => void;
  placeholder: string;
  label: string;
}) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
        value={emailInput ?? ""}
      />
    </div>
  );
};
