import React from "react";
import { styled } from "@mui/system";
const MainContainer = styled("div")({
  height: "25%",
  width: "100%",
  backgroundColor: "#4865f2",
  borderTopLeftRadius: "8px",
  borderTopTopRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const RoomButton = () => {
  return <MainContainer></MainContainer>;
};

export default RoomButton;
