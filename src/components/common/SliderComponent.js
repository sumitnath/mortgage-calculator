import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
const SliderComponent = ({
  min,
  max,
  step,
  defaultValue,
  value,
  onChange,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1} direction={"column"}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={step}
        marks
        value={value}
        onChange={onChange}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit}
          {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
