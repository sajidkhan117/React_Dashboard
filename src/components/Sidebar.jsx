import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Memberships",
            name:"Memberships",
            icon:<FaUserAlt/>
        },
        {
            path:"/kyc",
            name:"KYC",
            icon:<FaRegChartBar/>
        },
        {
            path:"/slideshow",
            name:"Slideshow",
            icon:<FaCommentAlt/>
        },
        {
            path:"/referalls",
            name:"Referalls",
            icon:<FaShoppingBag/>
        },
        {
            path:"/complaints",
            name:"Complaints",
            icon:<FaThList/>
        },
        {
            path:"/announcements",
            name:"Annoucements",
            icon:<FaThList/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=> (
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;


