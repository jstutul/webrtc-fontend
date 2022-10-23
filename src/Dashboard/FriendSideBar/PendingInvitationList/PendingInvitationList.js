import React from "react";
import { styled } from "@mui/system";
import PendingInvitationItem from "./PendingInvitationItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  height: "22%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
const PendingInvitationList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};
const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};
export default connect(mapStoreStateToProps)(PendingInvitationList);
