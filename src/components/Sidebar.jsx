import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,

//     FaThList
// }from "react-icons/fa";
import {FaBars} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdKey } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiSettings2Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdDashboard/>
        },
        {
            path:"/memberships",
            name:"Memberships",
            icon:<RiContactsBook2Fill/>
        },
        {
            path:"/kyc",
            name:"KYC",
            icon:<IoMdKey/>
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon: <IoNotificationsOutline/> 
        },
        {
            path:"/slideshow",
            name:"Slideshow",
            icon:<IoPlaySkipForwardOutline/>
        },
        {
            path:"/referalls",
            name:"Referalls",
            icon: <GoGift/>
        },
        {
            path:"/complaints",
            name:"Complaints",
            icon: <RiMessage2Line/>
        },
        {
            path:"/announcements",
            name:"Annoucements",
            icon: <HiOutlineSpeakerphone />
        },
        {
            path:"/settings",
            name:"Settings",
            icon: <RiSettings2Line/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Khan</h1>
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


