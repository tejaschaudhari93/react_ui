import React, { useState, useEffect,useRef,Component } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ColorTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [state, setState] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('https://server-s1.azurewebsites.net/api/courses',{
        //mode: 'no-cors',
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
    response.json()
      .then(json =>  {
       setState(
         json.payload)})
          //state = json.payload})
          .catch(error => console.log(error))
    
      // ...
    }
    fetchData();
  }, []);
  /* useEffect(() =>
  fetch('https://server-s1.azurewebsites.net/api/courses',{
    
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    }
}).then(response =>
    response.json())
    .then(json =>  {
     setState(
       json.payload)})
        //state = json.payload})
        .catch(error => console.log(error))
  ); */
 
  function  handleTabChange (event, newTabIndex) {
        setTabIndex(newTabIndex);
      };
     
function buttonPress(){

}

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Course Details" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            
            <Typography>
            {state && state?.map && state?.map( (d,i )=> <div key={i}>{d.id+'. '+d.description}<Button variant="text"
            onClick={() => {
              navigate("/Lessons",{state: {'courseId':state[i].id}});
            }}>Go to Details</Button>
            
            {
           /*  && <Navigate to="/dashboard" state={{'courseId':state?.data[i].id}}
             replace={true} /> */}
            </div>
            )} 
            <div>1. Serverless Angular with Firebase Course
            
        </div>
            {/* <div>2. Angular Core Deep Dive</div>
            <div>3. RxJs In Practice Course</div>
            <div>4. NgRx (with NgRx Data) - The Complete Guide</div>
            <div>5. Angular Security Course - Web Security Fundamentals</div>
            <div>6. Angular PWA - Progressive Web Apps Course</div>
            <div>7. Learn Angular Progressive Web Applications, build the future of the Web Today.</div>
            <div>8. Angular Advanced Library Laboratory: Build Your Own Library</div>
            <div>9. The Complete Typescript Course</div>
            <div>10. Rxjs and Reactive Patterns Angular Architecture Course</div>
            <div>11. Angular Material Course</div>
            <div>12. Angular Testing Course</div> */}
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>The second tab</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )}


export default ColorTabs;
