import check from "../assets/check.png"
export  function Recent(props){
return(
<div  className="update">
        <img src={props.profile} className="lat-dp"alt="" />
        <span className="profile-name">Marvin McKinney</span>
        <img src={check} className="blue-tick"/>
        <span className="update-desc">posted an update<br/></span> 
        <span className="last-seen">16  hours ago</span> 
         </div>)
}
function LatestActivities(props){
    

    return(
        <div className="lastactiv">
         <span id="latest_heading">Latest Activities</span>
         
         <Recent profile={props.profile} />
        
         <Recent profile={props.profile} />    
         <Recent profile={props.profile} />
         <Recent profile={props.profile} />
         <Recent profile={props.profile} />
        </div>

    )
}

export default LatestActivities;