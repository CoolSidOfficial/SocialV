
function Slider(props)
{ return(
    <div class="carousel">
        <section  class="carousel-inside">
          
            <div>
                <img src={props.img} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img2} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img3} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img4} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img5} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img6} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
            <div>
                <img src={props.img7} alt="" />
                <span>{}</span>
                <span>{}</span>
            </div>
          
            </section>
    </div>
 )

}
export default Slider;