import logo from "../assets/logo-mini.svg"; 


function Sidebar(props){
    return(
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
        <div className=""></div>


     </div>

    );
};


export default Sidebar;