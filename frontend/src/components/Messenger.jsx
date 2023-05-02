import React from 'react'
import {AppBar,Box,Toolbar} from '@mui/material';
import LoginDialog from './LoginDialog';
import styled from '@emotion/styled';

const Componenet=styled(Box)`
height:100vh;
background:#DCDCDC;

`
const Header=styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shoadow:none;
`
const Messenger = () => {
  return (
    <Componenet>
     <Header>
      <Toolbar>

      </Toolbar>
     </Header> 
     <LoginDialog/>
    </Componenet>
  )
}

export default Messenger
