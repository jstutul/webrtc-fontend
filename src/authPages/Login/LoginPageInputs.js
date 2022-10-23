import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";
const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setvalue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email address"
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

export default LoginPageInputs;
