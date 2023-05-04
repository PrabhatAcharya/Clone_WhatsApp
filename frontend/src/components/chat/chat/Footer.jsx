import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left:25px;
  font-size: 14px;
`;
const Rotate=styled(AttachFileIcon)`
transform: rotate(40deg);
`

const Footer = () => {
  return (
    <Container>
      <SentimentSatisfiedOutlinedIcon />
      <Rotate />
      <Search>
        <InputField placeholder="Type a Message" />
      </Search>
      <MicNoneIcon />
    </Container>
  );
};

export default Footer;