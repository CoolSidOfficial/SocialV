import caralogo from "../assets/profilepg.jpg"
function Slider(props)
{ return(
    <div class="carousel">
        <section  class="carousel-inside">
          
            <div>
                <img src ={props.img} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span>{}</span>
            </div>
            <div>
                <img src={props.img2} className="cara_img"alt="" />
                <img src={caralogo} className="carousel_logo" />
                <span>{}</span>
            </div>
            <div>
                <img src={props.img3} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                
                <span>{}</span>
            </div>
            <div>
                <img src={props.img4} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span>{}</span>
            </div>
            <div>
                <img src={props.img5} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                {/* <span>siddhant jain</span> */}
            </div>
            <div>
                <img src={props.img6} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span>{}</span>
            </div>
            <div>
                <img src={props.img7} className="cara_img"alt="" />
                <img src={caralogo}className="carousel_logo" />
                <span>{}</span>
            </div>
          
            </section>
    </div>
 )

}
export default Slider;