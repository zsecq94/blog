const Select = ({ list, onChange }) => {
  return (
    <select name="" id="" onChange={onChange}>
      {list.map((V, idx) => (
        <option value={V} key={idx}>
          {V}
        </option>
      ))}
    </select>
  );
};

export default Select;
