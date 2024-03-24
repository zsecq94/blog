import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const SelectBox = () => {
  return (
    <Select>
      <Option value="tech">tech</Option>
      <Option value="algorithm">algo</Option>
      <Option value="portfolio">port</Option>
    </Select>
  );
};

export default SelectBox;
