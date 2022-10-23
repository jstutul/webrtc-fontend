import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInput from "./RegisterPageInput";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validator";
import { getAction } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const history = useNavigate();
  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password,
    };
    register(userDetails, history);
  };
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        setMail={setMail}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};
export default connect(null, mapActionsToProps)(RegisterPage);
