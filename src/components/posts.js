import check from "../assets/check.png";
import first_dp from "../assets/profilepg.jpg"


// post images 
import first_post from "../assets/posts/threegirls.jpg";
import second_post from "../assets/posts/football.jpg"
import third_post from "../assets/posts/couple.jpg";
import fourth_post from "../assets/posts/mountain.jpg";
import fifth_post from "../assets/posts/bus.jpg";
import six_post from "../assets/posts/celebration.jpg";
import seven_post from "../assets/posts/pizza.jpg";
import eight_post from "../assets/posts/yacht_couple.jpg";

// 
const first_name="Jenny WIlson"
// 
function Posts(props){
    return(
     <div className="post_box">
        <nav>
            <ul>
            <li><img src={props.dp} className="pdp" alt="" /></li>
            <li id="title">{props.poster} </li>
            <li><img src={check} className="blue_tick_post"/></li>
            <li id="posted_text"> posted an update  in the group</li>
            <li id="time_period">a year ago</li>
            <li><button  id="tripledot">...</button></li>
           </ul>

        </nav>
        <section id="content_container">
            <span><br/>Lorem ipsum dolor sit amet.</span>
          <img src={props.image_post} className="post_image"/>
        </section>
            <div>
                {/* <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
         */}
            </div>
           <div>
            <span></span>
           <span></span>
           <span></span></div>
            <section></section>  

     </div>








    );
 
 };
  function PostContainer(){
       return(
        <div id="post_container">
            <Posts dp={first_dp} poster={first_name} image_post ={first_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={second_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={third_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={fourth_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={fifth_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={six_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={seven_post}/>
            <Posts dp={first_dp} poster={first_name} image_post ={eight_post}/>
            

        </div>
       ); 
 }
 export default PostContainer;
