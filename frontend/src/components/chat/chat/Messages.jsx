import { useContext , useState,useEffect } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api.js";
import Message from './Message.jsx'

const Wrapper = styled(Box)`
  background-image: url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
  background-size: 50%;
`;
const Componenet = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
   padding: 1px 80px;
`
const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      console.log(data);
      setMessage(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText =async(e) => {
    console.log(e);
    let code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      await newMessage(message);
      setValue('')
      setNewMessageFlag(prev=>!prev)
      console.log(message);
    }
  };

  return (
    <Wrapper>
      <Componenet>
        {message &&
          message.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Componenet>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};

export default Messages;
