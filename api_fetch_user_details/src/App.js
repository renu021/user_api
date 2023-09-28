import React from "react";
import './App.css';
import { Routes,Route } from "react-router-dom";



import Home from "./route/Home";
import Students from "./route/Students";
import Contact from "./route/Contact";

function App() {
  return (
    <div className="App">
      <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Students" element={<Students />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
   </>
     
     
      
    </div>
  );
}

export default App;
