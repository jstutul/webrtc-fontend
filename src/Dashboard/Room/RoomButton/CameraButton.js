import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOff from "@mui/icons-material/VideocamOff";

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOff />}
    </IconButton>
  );
};

export default CameraButton;
