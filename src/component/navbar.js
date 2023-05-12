import React from "react";
import '../App.css'
import { AiTwotoneHome } from "react-icons/ai";
import { FaSchool,FaBars} from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdWork } from "react-icons/md";
import {NavLink} from 'react-router-dom'









export default function Navbar({children})

{
   const[isOpen,setIsOpen]=React.useState(true);
   function toggle()
   {
      setIsOpen(!isOpen)
   }
   const menuItem=[
                  {path:"/home",
                   name:"Home",
                   icon:<AiTwotoneHome/>
                  },
                  {path:"/Education",
                   name:"Education",
                   icon:<FaSchool/>
                  },
                  {path:"/project",
                   name:"Project",
                   icon:<MdWork/>
                  },
                  {path:"/contact",
                   name:"Contact",
                   icon:<TiContacts/>
                  }
                  ]
   return(
      <div className="container">
                  <div style={{width:isOpen?"200px":"50px" }} className="navbar">
                     <div className="top_section">
                        <h1 style={{display:isOpen?"block":"none"}} className="logo">LOGO</h1>
                              <div style={{marginleft:isOpen?"30px":"0px"}} className="bars">
                                 <FaBars onClick={toggle}/>
                              </div>
                     </div>
                  {menuItem.map((item,index)=>(
                     <NavLink  to={item.path} key={index} className="link" activeclassName="active">
                        <div className="iconName_container">
                            <div className="icon">{item.icon}</div>
                             <div style={{display:isOpen?"block":"none"}} className="name">{item.name}</div>
                        </div>
                     </NavLink>
                  ))
                  }
                  
                  </div>
       <main>{children}</main>
       
      </div>
      
   )
} 