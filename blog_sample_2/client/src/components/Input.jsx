const Input = ({ name, placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder ? placeholder : ""}
      onChange={(e) => onChange(e, name)}
    />
  );
};

export default Input;
