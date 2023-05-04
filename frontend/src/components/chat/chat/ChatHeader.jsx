import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import React from "react";
import { defaultProfilePicture } from "../../../constants/data";
const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
const Name=styled(Typography)`
margin-left:12px !important;

`
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color:rgb(0,0,0,0.6);
`;
const RightContainer = styled(Box)`
margin-left: auto
&>svg{
    padding:8px;
    font-size:23px;
    color:#000;
}
`

const ChatHeader = () => {
  return (
    <Header>
      <Image src={defaultProfilePicture} alt="dp" />
      <Box>
        <Name>Nmae</Name>
        <Status>Online status</Status>
      </Box>
      <RightContainer>
        <Search/>
        <MoreVert/>
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
