import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
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
margin-left: auto !important;
&>svg{
    padding:8px;
    font-size:23px;
    color:#000;
}
`

const ChatHeader = ({person}) => {
  const { ativeUsers } = useContext(AccountContext);
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {ativeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
