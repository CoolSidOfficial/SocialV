import check from "../assets/check.png";

function Posts(props){
    return(
     <div className="post_box">
        <nav>
            <li><img src={props.dp} className="pdp" alt="" /></li>
            <li>{props.poster} <img src={check} className="blue-tick"/></li>
            <li> posted an update<br/>A year ago</li>
            <li><button  id="tripledot">...</button></li>
           

        </nav>
        <section>
            I love fodo
        </section>
            <div>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        
            </div>
           <div>
            <span></span>
           <span></span>
           <span></span></div>
            <section></section>  

     </div>








    );
 
 };
 export default Posts;
