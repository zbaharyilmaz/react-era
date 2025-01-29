import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// //! veya sadece BrowserRouter, güncel seçenek.
import MyNavbar from "../components/MyNavbar";
import ContactForm from "../pages/ContactForm";
import CourseCard from "../pages/CourseCard";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Teacher />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
