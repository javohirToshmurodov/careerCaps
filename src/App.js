import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import JobsCatalog from "./pages/JobsCatalog";
import Quiz from "./pages/Quiz";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path="jobsCatalog" element={<JobsCatalog />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="about" element={<About />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
