import React from 'react'
import {Box} from "@mui/material";
import Header from './Header';
import Search from './Search';

function MenuBar() {


  return (
    <Box>
      <Header/>
      <Search/>
    </Box>
  );
}

export default MenuBar
