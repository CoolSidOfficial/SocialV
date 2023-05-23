import sbanner from "../assets/logo-white.svg"
function SideBanner(){
    return(
        <div className="banner">
            <img src={sbanner}  id="socialvbanner"/>
            <p id="banner_text">Feel free to reach <br/>   us anytime.     we are <br/>avaliable 24 hours</p>
            <button id="contact_button" >Contact US</button>
        </div>

    );
}
export default SideBanner;

