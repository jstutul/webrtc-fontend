import React from "react";
import InputWithLabel from "./../../shared/components/InputWithLabel";

const RegisterPageInput = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setvalue={setMail}
        label="E-mail Address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setvalue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={password}
        setvalue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInput;
