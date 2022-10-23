import React from "react";
import { styled } from "@mui/material";
const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});
const Label = styled("span")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
});

const InputWithLabel = ({ value, setvalue, label, type, placeholder }) => {
  const handleValueChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

export default InputWithLabel;
