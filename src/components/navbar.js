import React from "react";

function Navbar(props){
return (
  
  <nav className="navclass">
    <ul  className="nav-items">
       <li><a href="">{props.first}</a> </li>
       <li><a href="">{props.second}</a></li>
       <li><a href="">{props.third}</a></li>
       <li><a href="">{props.fourth}</a></li>
       <li><a href="">{props.fifth}</a></li>
       <li><a href="">{props.sixth}</a></li>


    </ul>

  </nav>

  
    )
};
export default Navbar;