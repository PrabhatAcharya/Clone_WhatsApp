import { Box } from '@mui/material'
import React from 'react'
import ChatHeader from '../chat/ChatHeader.jsx'
import Messages from './Messages.jsx'

const ChatBox = () => {
  return (
    <Box>
      <ChatHeader/>
      <Messages/>
    </Box>
  )
}

export default ChatBox
