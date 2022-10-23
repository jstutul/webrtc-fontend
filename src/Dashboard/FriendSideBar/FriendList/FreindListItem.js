import { Button, Typography } from "@mui/material";
import React from "react";
import Avatar from "../../../shared/components/Avatar";
import { chatType, getActions } from "../../../store/actions/chatActions";
import Onlineindicator from "./Onlineindicator";
import { connect } from "react-redux";
const FreindListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChoseActiveConversation = () => {
    setChosenChatDetails({ id: id, name: username }, chatType.DIRECT);
  };

  return (
    <Button
      onClick={handleChoseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItem: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        postotion: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <Onlineindicator />}
    </Button>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FreindListItem);
