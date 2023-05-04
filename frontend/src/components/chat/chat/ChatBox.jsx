import { Box } from "@mui/material";
import React from "react";
import ChatHeader from "../chat/ChatHeader.jsx";
import Messages from "./Messages.jsx";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider.jsx";
const ChatBox = () => {
  const { person } = useContext(AccountContext);
  return (
    <Box >
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
