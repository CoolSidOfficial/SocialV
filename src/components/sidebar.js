import logo from "../assets/logo-mini.svg"; 
// import RightArrow from "../assets/righttriangle.png";
// import 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileLines,
    faUserGroup,
    faPeopleGroup,
    faShield,
    faCommentDots,
    faCaretRight,
    faLock,
    faBell,
    faGear,
    faBagShopping,
    faImage
}from '@fortawesome/free-solid-svg-icons'
function Toggle(){
    document.getElementsByClassName("toggle")[0].style.display="none";
    // document.getElementsByClassName("sidebar-class")[0].style.width="500px";
}

// 
function Sidebar(props){
    
    return(
    <>
    <button id="side-switch" onClick={Toggle}></button>    
     <div className="sidebar-class">
        <span class="top-sidebar">

            <img src={logo}></img>
            <span id="heading">SocialV</span>
            
        </span>
            
        <div className="sidebar-user ">
        <img src={props.profile_photo}></img>
         <span id="profile_name ">{props.profile_name}</span>
         <span id="profile_username">{props.profile_username}</span>
        </div>

        <div className="menu-items ">
            <span id="heading">MENU</span>
           <div className="side-items">
           
            <FontAwesomeIcon className="side-icons" icon={faFileLines} />
            <span>Newsfeed</span> 
            </div>
       
           <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faUserGroup} />      
            <span>Members</span> </div>
          <div className="side-items"> <FontAwesomeIcon className="side-icons" icon={faPeopleGroup} />
           <span>Group</span>
            </div>
           <div className="side-items">
           <FontAwesomeIcon className="side-icons" icon={faShield} />
            <span>Badges</span>
             </div>
           
            <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faCommentDots} />
            <span>Messages</span>

            </div>
            <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faImage} />
            <span>Gallery</span>

            </div>
            <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faBagShopping} />
            <span>Shop  </span>

            </div>
        </div>
       <div className="sidebar-footer">
       <FontAwesomeIcon icon={faLock}className="footer-icons" />
       <FontAwesomeIcon icon={faBell} className="footer-icons"/>
       <FontAwesomeIcon icon={faGear} className="footer-icons"/>
       <FontAwesomeIcon icon={faUserGroup}className="footer-icons" />
       </div>

     </div>
</>
    );
};


export default Sidebar; 