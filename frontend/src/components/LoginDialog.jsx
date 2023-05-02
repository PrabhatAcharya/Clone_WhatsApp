import { Dialog,Box, Typography, List, ListItem } from '@mui/material'
import {qrCodeImage} from '../constants/data.js'
import styled from "@emotion/styled";

const dialogStyle={
    height:"95%",
    marginTop:"12%",
    width:'60%',
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden",
}
const Componenet=styled(Box)`
display:flex
`
const Container=styled(Box)`
padding:56px 0 56px 56px
`
const QrCode=styled("img")({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
});
const styledList=styled(List)`
 &>li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
 }
`
const Title=styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`
const LoginDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Componenet>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <styledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu setting and select WhatsApp</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
            <ListItem></ListItem>
          </styledList>
        </Container>
        <Box>
          <QrCode src={qrCodeImage} alt="qrcode" />
        </Box>
      </Componenet>
    </Dialog>
  );
}

export default LoginDialog
