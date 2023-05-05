import { useContext } from "react";
import { Box,Typography,styled } from "@mui/material";
import {formatDate} from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const SendingCss = styled(Box)`
background:#dcf8c6;
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
border-radius:10px;
word-break:break-word;
`
const ReceivedCss = styled(Box)`
  background: #FFFFFF;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  word-break: break-word;
`;
const Text=styled(Typography)`
font-size:14px;
padding:0 25px 5px;

`
const Time=styled(Typography)`
font-size:10px;
color:#919191;
margin-top:6px;
word-break: keep-all;
`

const Message = ({ message }) => {
    // console.log(message.text);
    const {account}=useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <SendingCss>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </SendingCss>
      ) : (
        <ReceivedCss>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </ReceivedCss>
      )}
    </>
  );
};
export default Message;