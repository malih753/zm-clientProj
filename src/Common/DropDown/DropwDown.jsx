import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { memo } from "react";

const DropDown = ({
  items = [],
  label,
  styles = "",
  FlagIcon = () => {},
  selectStyles = "",
  onChange,
  value = "",
  name = "",
  required = false,
}) => {
  const selectedValue = items.includes(
    value && value[0]?.toLocaleUpperCase() + value.slice(1)
  )
    ? value[0]?.toLocaleUpperCase() + value.slice(1)
    : "";

  console.log("Selected Value", selectedValue);
  return (
    <div className={`flex flex-col ${styles}`}>
      {label && (
        <label
          className="text-black text-xs font-medium"
          htmlFor="outlined-age-native-simple"
        >
          {label}
        </label>
      )}
      <FormControl
        sx={{
          bgcolor: "white",
          marginTop: label && "14px",
          // minWidth: "200px",
          border: "0.5px solid #AAB3C1",
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Removes the border
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none", // Removes the border when focused
          },
          "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
            {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: selectStyles,
            },
        }}
      >
        <Select
          sx={{
            fontSize: "12px",
            color: "#7D899F",
            "& .MuiSelect-select": {
              border: "none", // Removes the internal border
              outline: "none", // Removes the internal outline
            },
            "&:focus .MuiSelect-select": {
              border: "none", // Removes border on focus
              outline: "none", // Removes outline on focus
            },
            ".css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "16px 9px",
              },

            // color: "#7D899F",
            ".css-1u6jos5-MuiSvgIcon-root-MuiSelect-icon , .css-r4d5p-MuiSvgIcon-root-MuiSelect-icon":
              {
                color: "#1F2B6A ",
              },
          }}
          value={selectedValue}
          onChange={onChange}
          IconComponent={KeyboardArrowDownIcon}
          name={name}
          required={required}
        >
          {items.map((item) => (
            <MenuItem
              key={item}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#001942",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                gap: "10px",
              }}
              value={item}
            >
              {FlagIcon && <FlagIcon />}
              <span>{item}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(DropDown);
