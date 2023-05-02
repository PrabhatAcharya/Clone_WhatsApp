import React,{useState} from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const MenuOption =styled(MenuItem)`
font-size: 14px;
padding:15px 60px 5px 24px;
color:#4a4a4a

`

function HeaderMenu() {

    const [open,setOpen] =useState(null);
    const handleClose = ()=>{
        setOpen(null);
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

  return (
    <div>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}

export default HeaderMenu
