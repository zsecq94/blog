import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, Chip } from "@mui/joy";

const Chips = () => {
  return (
    <Select
      multiple
      renderValue={(selected) => (
        <Box sx={{ display: "flex", gap: "0.25rem" }}>
          {selected.map((selectedOption, idx) => (
            <Chip variant="soft" color="primary" key={idx}>
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      sx={{
        minWidth: "15rem",
      }}
      slotProps={{
        listbox: {
          sx: {
            width: "100%",
          },
        },
      }}
    >
      <Option value="React">React</Option>
      <Option value="Javascript">Javascript</Option>
      <Option value="Vue">Vue</Option>
      <Option value="jQuery">jQuery</Option>
    </Select>
  );
};

export default Chips;
