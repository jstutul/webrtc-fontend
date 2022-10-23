import {
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputWithLabel from "./../../../shared/components/InputWithLabel";
import { ValidateEmail } from "../../../shared/utils/validator";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "./../../../store/actions/friendsActions";
const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFomValid] = useState("");
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };
  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetMailAddress: mail,
      },
      handleCloseDialog
    );
  };
  useEffect(() => {
    setIsFomValid(ValidateEmail(mail));
  }, [mail, setIsFomValid]);
  return (
    <>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography component={"h2"} variant="h6">
            Invite a Friend
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography component={"span"} variant="p">
              Enter e-mail address of friend which you like to invite
            </Typography>
            <InputWithLabel
              value={mail}
              setvalue={setMail}
              label="E-mail"
              type="text"
              placeholder="Enter email address"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(AddFriendDialog);
