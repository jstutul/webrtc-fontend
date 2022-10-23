import React from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CloseFullscreen from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
const MainContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

const ResizeRoomButton = ({ isRoomMinimized, handleroomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleroomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreen />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
