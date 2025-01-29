import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// //! veya sadece BrowserRouter, güncel seçenek.
import MyNavbar from "../components/MyNavbar";
import ContactForm from "../pages/ContactForm";
import CourseCard from "../pages/CourseCard";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";
import NotFound from "../pages/NotFound";
import Paths from "../pages/Paths";
//! NOT: ANAYOL OLD. EXACT OLARAK BELİRT.
//* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mentors" element={<Teacher />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
