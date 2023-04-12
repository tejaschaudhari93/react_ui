import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import history from './history';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';

export default function Demo() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    //history.push("/"+text)
     navigate("/Courses");
  }
  return (
    
    <Stack
    direction="column"
    alignItems="center"
    justifyContent="center"
      component="form"
      
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="test@angular-university.io"
        variant="filled"
      />
      <TextField
        hiddenLabel
        type="password"
        id="filled-hidden-label-normal"
        defaultValue="test"
        variant="filled"
      />
      <Button style={{backgroundColor:"#ff9800"}} sx={{
        width: '28ch',
      }} variant="contained" onClick={routeChange}>Login</Button>

    </Stack>
   
  );
}
