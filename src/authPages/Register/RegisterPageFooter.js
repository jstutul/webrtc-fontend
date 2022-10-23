import React from "react";
import CustomPrimaryButton from "./../../shared/components/CustomPrimaryButton";
import RedirectInfo from "./../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
const getFormNotValidMessage = () => {
  return "Username should contain between 3 and 12 character and password should contain 6 and 12 character. Also provide an valid emaill addresss";
};
const getFormValidMessage = () => {
  return "Press to register";
};
const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register now"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have and account ?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
