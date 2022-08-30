import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Posts from "./pages/Posts"
import Navbar from "./components/Navbar";
// import ExerciceDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
        {/* <Route path="/exercise/:id" element={<ExerciceDetail />}/> */}
        {/* <Route path="/create" element={<Posts />} /> */}
      </Routes>
    {/* <Footer /> */}
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);