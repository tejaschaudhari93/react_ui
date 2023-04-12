import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CourseDetails from './coursedetails.jsx';

class Courses extends Component {

    constructor(props) {
        super(props)   
        this.state = {
           
        }
         
    }
    componentDidMount() {
        fetch('https://server-s1.azurewebsites.net/api/login',{
            
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: 'test@angular-university.io',
              password: 'test',
            })
        }).then(response =>
            response.json())
            .then(json =>  this.setState(json))
            .catch(error => console.log(error))

        
    }
    render() {
    return (
        <div>
            <CourseDetails/><li key={ this.state.id}>{ this.state.id}</li></div>
    )}
};
export default Courses;