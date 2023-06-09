import React,{useEffect,useState} from 'react'
import { getUsers } from '../../../service/api'
import { Box,Divider,styled } from '@mui/material';
import Conversation from './Conversation.jsx'
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
 
`;
const StyledDivider = styled(Divider)`
margin:0 0 0 74px;
backgroundColor:#e9edef;
opaacity: .6;
`

const Conversations = ({text}) => {
    const [users,setUsers]=useState([]);
      const { account, socket, setActiveUsers } = useContext(AccountContext);
    useEffect(() =>{
        const fetchData=async()=>{
           let response=await getUsers();
           const filteredUsers = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
           setUsers(filteredUsers);
        }
        fetchData();
    },[text])
    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on('getUsers',users => {
        setActiveUsers(users);
      })
    },[account])


  return (
    <Component>
    
     {
        users.map(user=>{
        return (
          user.sub !== account.sub && (
            <>
              <Conversation user={user} />
              <StyledDivider />
            </>
          )
        );
        })
     }
    </Component>
  )
}

export default Conversations
