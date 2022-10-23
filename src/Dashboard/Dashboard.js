import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendSideBar from "./FriendSideBar/FriendSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getAction } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ SetUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      SetUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <AppBar />
      <Messenger />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getAction(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Dashboard);
