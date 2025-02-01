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
import TeacherDetails from "../pages/TeacherDetails";
import PrivateRouter from "./PrivateRouter";
import FS from "../pages/FS";
import AWS from "../pages/AWS";
//! NOT: ANAYOL OLD. EXACT OLARAK BELİRT.
//* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır.
import CardDetails from "../pages/CardDetails";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />

        {/* //? Path route'nun içersinde başka alt route'lar olabilir */}
        
        {/* //!PRIVATE ROUTER: şifre kontrolü ile girilebilecek sayfalar için PrivateRouter a yönlendirdir. Açmalı kapamalı Route tag ı açtık. Önce PrivateRouter a gitme şartı, sonra ContactForm tag ı yönlendirmesi yaptık.*/}
        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<ContactForm />} />
        </Route>

        <Route path="/paths" element={<Paths />}>
        <Route path="/paths/fs" element={<FS/>} />
     
        <Route path="/paths/aws" element={<AWS/>} />
        </Route>

        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:names" element={<CardDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" elemet={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
