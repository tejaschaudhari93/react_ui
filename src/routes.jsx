import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from "./demo.jsx";
import Courses from "./courses.jsx";
import Lessons from "./lessons.jsx";
//import history from './history';

export default class Routes1 extends Component {
    render() {
        return (
                <Routes>
                    <Route path="/" element={<Demo/>} />
                    <Route path="/Courses" element={<Courses/>} />
                    <Route path="/Login" element={<Demo/>} />
                    <Route path="/Logout" element={<Demo/>} />
                    <Route path="/Lessons" element={<Lessons/>} />
                </Routes>
        )
    }
}