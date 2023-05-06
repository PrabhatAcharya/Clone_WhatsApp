import { useContext, useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api.js";
import Message from "./Message.jsx";

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
`;



const Messages = ({ person, conversation }) => {
  const { account, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AccountContext);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);


  const scrollRef = useRef();

  const [file, setFile] = useState();
  const [image, setImage] = useState("");
    const [incommingMessage, setIncommingMessage] = useState("");



   useEffect(() => {
     socket.current.on("getMessage", data=>{
      setIncommingMessage({
        ...data,
        createdAt:Date.now(),
      });
     });
   }, []);

   useEffect(() =>{
incommingMessage && conversation?.members?.includes(incommingMessage.senderId) && setMessage(prev=>[...prev,incommingMessage])
   },[incommingMessage,conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      console.log(data);
      setMessage(data);
    };
     conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  ///scroll to down
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [message]);
  
  const sendText = async (e) => {
    console.log(e);
    let code = e.keyCode || e.which;
    if (code === 13) {
      let message;
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit('sendMessage',message);
      await newMessage(message);
      console.log("Mymessage", message);
      setValue("");
      setValue("");
      setImage("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Componenet>
        {message &&
          message.map((message) => (
            <Container ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))}
      </Componenet>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
