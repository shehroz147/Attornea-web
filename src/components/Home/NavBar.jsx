import React from 'react';
import img from '../pictures/attornea.png';
import './Home.css'
export default function NavBar() {
  return (
    <header>
    <nav className='bg-light my-nav'>
        <ul className=''>
            <li> <a href="#" id=""><img src={img} alt="" width={100} /></a> </li>
            <li> <button id="search_btn"  data-tooltip="Search"> <i className="bi bi-search  "></i></button> </li>
            <li id="space2"></li>
            <li> <a  data-tooltip="Home" href="#" id="home"> <i className="bi bi-house-fill"></i> </a> </li>
            <li> <a  data-tooltip="Group" href="#" id="group"> <i className="bi bi-people-fill"></i> </a></li>
            <li> <a  data-tooltip="Watch" href="#" id="tv"> <i className="bi bi-tv"></i> </a> </li>
            <li> <a  data-tooltip="Friend" href="#" id="friend"> <i className="bi bi-person-fill"></i> </a> </li>
         <li id="space1"></li>
            <li> <button  data-tooltip="Add" id="btn_plus"><i className="bi bi-person-plus"></i></button> </li>
            <li> <button data-tooltip="Message" id="btn_msg"><i className="bi bi-chat-dots"></i></button></li>
            <li> <button  data-tooltip="Notification" id="btn_bell"> <i className="bi bi-bell-fill"></i></button></li>
            <li>  <button data-tooltip="Profile" id="btn_profile"><i className="bi bi-caret-down-square"></i></button>  </li>
        </ul>
    </nav>
</header>
  );
}
