import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const FloatingBtn = () => {

  return (
    <Box sx={{ '& > :not(style)': { p:3, position: 'absolute', bottom: 10, right:10,} }}>
      <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: 'red'}} >
        <SmartToyIcon style={{ fill: "white" }}/>
      </Fab>
    </Box>
  );
}




export default FloatingBtn



