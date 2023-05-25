import caralogo from "../assets/profilepg.jpg"
const jenny="jenny wilson";
function Slider(props)
{ return(
    <div class="carousel">
        <section  class="carousel-inside">
          
            <div>
                <img src ={props.img} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
            </div>
            <div>
                <img src={props.img2} className="cara_img"alt="" />
                <img src={caralogo} className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
                
            </div>
            <div>
                <img src={props.img3} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                
                <span className="caro_text">{jenny}</span>
                
            </div>
            <div>
                <img src={props.img4} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
               
            </div>
            <div>
                <img src={props.img5} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
               
            </div>
            <div>
                <img src={props.img6} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
               
            </div>
            <div>
                <img src={props.img7} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span className="caro_text">{jenny}</span>
               
            </div>
          
            </section>
    </div>
 )

}
export default Slider;