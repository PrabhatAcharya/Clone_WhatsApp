import { Dialog, Box } from "@mui/material";
import React from "react";
import EmptyChat from "./chat/EmptyChat";
import styled from "@emotion/styled";
import Menu from "./menu/MenuBar";
import ChatBox from "../chat/chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider.jsx";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  width: 72%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
function ChatDialog() {
  const {person}=useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat/> }
        </RightComponent>
      </Component>
    </Dialog>
  );
}

export default ChatDialog;
