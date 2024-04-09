const Select = ({ name, list, onChange }) => {
  return (
    <select name="" id="" onChange={(e) => onChange(e, name)}>
      {list.map((V, idx) => (
        <option value={V} key={idx}>
          {V}
        </option>
      ))}
    </select>
  );
};

export default Select;
