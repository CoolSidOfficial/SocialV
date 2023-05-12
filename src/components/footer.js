import Logo from '../assets/footer/logo-mini.svg';
import AppStoreLogo from '../assets/footer/app-store.png';
import PlayStoreLogo from'../assets/footer/playstore.png';
function Footer(props){
    return(
        <div className="footer-sections">
            <section className="left-side">
               <img id="main-logo"src={Logo}/>
                <span id="title-heading">SocialV</span>
                <span id="download-title">Download app from</span>
                <img className="appstore logo" src={AppStoreLogo}/> 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <img className="playstore logo" src={PlayStoreLogo}/>
            </section>
            <section className="right-side">
            <div className="first-column">
                <span className="columns-heading">COMPANY</span>
                <span className='columns-data'>About Us</span>
                <span className='columns-data'>Contact Us</span>
                <span className='columns-data'>Blog</span>
                <span className='columns-data'>Blog Detail</span>

            </div>
            <div className="second-column">
            <span className="columns-heading">COMMUNITY</span>
            <span className='columns-data'>Activity</span>   
            <span className='columns-data'>Timeline</span>
            <span className='columns-data'>Forums</span>
            <span className='columns-data'>Friends</span>



            </div>
            <div className="third-column">
            <span className="columns-heading">HELP</span>
            <span className='columns-data'>Frequenty Asked <br></br>Questions</span>
            <span className='columns-data'>Privacy Policy</span>
            <span className='columns-data'>Terms&Condition</span>

 
            </div>
            <div className="fourth-column">
            <span className="columns-heading">FOLLOW US</span>
            <span className='columns-data'>Facebook</span>
            <span className='columns-data'>Instagram</span>
            <span className='columns-data'>Dribble</span>

            </div>
            </section>
        </div>

    )
}

export  default  Footer;


