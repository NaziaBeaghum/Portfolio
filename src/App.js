import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from "./component/navbar";
import './App.css'
import Home from "./pages/home";
import Contact from "./pages/contact";
import Education from "./pages/Education";
import Project from "./pages/project";

export default function App()
{
  return(
    <div className="app">
      
    <BrowserRouter>
    <Navbar>
      
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Home" element={<Home/>}/>
         <Route path="/Education" element={<Education/>}/>
         <Route path="/project" element={<Project/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Navbar>
  
    </BrowserRouter>
    
    </div>
    
    
  )
}
