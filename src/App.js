import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import JobsCatalog from "./pages/JobsCatalog";
import Quiz from "./pages/Quiz";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import Psixolog from "./pages/Psixolog";
import Arxitektor from "./pages/Arxitektor";
import Muhandis from "./pages/Muhandis";
import Veterinar from "./pages/Veterinar";
import Dasturchi from "./pages/Dasturchi";
import DynomicJob from "./pages/DynomicJob";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import RoutesComponent from "./pages/Admin/RoutesComponent";
import QuizDetails from "./pages/Admin/QuizDetails";
import TestWarningModal from "./components/TestWarningModal";
import Testing from "./components/Testing";
import Reyting from "./pages/Reyting";
export default function App() {
  return (
    <>
      <Header />
      <TestWarningModal />
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path="jobsCatalog" element={<JobsCatalog />} />
        <Route path="psixolog" element={<Psixolog />} />
        <Route path="arxitektor" element={<Arxitektor />} />
        <Route path="muhandis" element={<Muhandis />} />
        <Route path="veterinar" element={<Veterinar />} />
        <Route path="dasturchi" element={<Dasturchi />} />
        <Route path="testing/:id" element={<Testing />} />
        <Route path="reyting" element={<Reyting />} />
        <Route path="quiz" element={<Quiz />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="details/:quiz_id" element={<QuizDetails />} />
          <Route path="admin" element={<Admin />}>
            <Route path=":id" element={<RoutesComponent />} />
          </Route>
          <Route path="login" element={<SignUp />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="statistika" element={<Statistics />} />
        <Route path="contact" element={<Contact />} />
        <Route path="job/:job_id" element={<DynomicJob />} />
      </Routes>
    </>
  );
}
