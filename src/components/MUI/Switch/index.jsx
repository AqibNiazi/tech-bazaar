import React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitch({ checked, onChange }) {
  return (
    <div>
      <span>{checked ? "Light" : "Dark"} Mode</span>
      <Switch
        checked={checked}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
