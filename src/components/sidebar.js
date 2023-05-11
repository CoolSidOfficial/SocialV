import logo from "../assets/logo-mini.svg"; 
// import RightArrow from "../assets/righttriangle.png";
// import 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileLines,faUserGroup,faPeopleGroup, faShield,faCommentDots,faCaretRight} from '@fortawesome/free-solid-svg-icons'
function Sidebar(props){
    return(
    <>
    <div id="side-switch"  ></div>
     <div className="sidebar-class">
        <span class="top-sidebar">
            <img src={logo}></img>
            <span id="heading">SocialV</span>

        </span>
        <div className="sidebar-user">
        <img src={props.profile_photo}></img>
         <span id="profile_name">{props.profile_name}</span>
         <span id="profile_username">{props.profile_username}</span>
         
        </div>
        <div className="menu-items">
            <span id="heading">MENU</span>
           <div>
           
            <FontAwesomeIcon icon={faFileLines} />
            <span>Newsfeed</span> 
            </div>
       
           <div>
            <FontAwesomeIcon icon={faUserGroup} />      
            <span>Members</span> </div>
          <div> <FontAwesomeIcon icon={faPeopleGroup} />
           <span>Group</span>
            </div>
           <div>
           <FontAwesomeIcon icon={faShield} />
            <span>Badges</span>
             </div>
           
            <div>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Messages</span>

            </div>
        </div>


     </div>
</>
    );
};


export default Sidebar; 