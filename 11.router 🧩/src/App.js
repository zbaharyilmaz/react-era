import React from 'react';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import ContactForm from './pages/ContactForm';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"; 
//! veya sadece BrowserRouter, güncel seçenek.
import MyNavbar from "./components/MyNavbar";

const App = () => {
  return (
    <div>
      <Router>
      <MyNavbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mentors" element={<Teacher/>}/>
      <Route path="/courses" element={<CourseCard/>}/>
      <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      </Router>
     
    </div>
  )
}

export default App