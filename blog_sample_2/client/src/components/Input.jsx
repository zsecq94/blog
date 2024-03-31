const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder ? placeholder : ""}
      onChange={onChange}
    />
  );
};

export default Input;
