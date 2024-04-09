const InputFile = ({ name, label, onChange }) => {
  return (
    <label htmlFor={name} className="file-con">
      {label}
      <input onChange={(e) => onChange(e, name)} type="file" id={name} />
    </label>
  );
};

export default InputFile;
