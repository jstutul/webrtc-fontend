import { Box } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Onlineindicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItem: "center",
        rigth: "0px",
        position: "absolute",
        right: "0px",
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default Onlineindicator;
