import React, { useState, useEffect,useRef,Component } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';

import { useLocation } from 'react-router-dom';


const Lessons  = () => {
  const  retirve  = useLocation();
  const [state, setState] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      var url = "https://server-s1.azurewebsites.net/api/lessons?courseId="+ retirve.state.courseId +"&sortOrder=asc&pageNumber=0&pageSize=3";
      const response = await fetch(url,{
         
          method: 'GET',
          headers:{
              'Content-Type': 'application/json'
          }
      })
      response.json().then(json =>  {
              setState(json)
            }).catch(error => console.log(error))
      }
  fetchData();
}, []);

    return (
  
   <Typography>
            {state && state?.map && state?.map( (d,i )=> <div key={i}>{d.seqNo+'. '+d.description+'. Duration: '+d.duration}
            
           
            </div>
            )} 
            {state && state.length == 0 && <div>No saved courses</div>}
    </Typography>
  )}


export default Lessons;
