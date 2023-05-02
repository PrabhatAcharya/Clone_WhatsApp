import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
const Componenet = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;
const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shoadow: none;
`;
const Header = styled(AppBar)`
  height: 120px;
  background-color: #00A884;
  box-shoadow: none;
`;
const Messenger = () => {
  const {account}=useContext(AccountContext);
  return (
    <Componenet>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Componenet>
  );
};

export default Messenger;
