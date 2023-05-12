import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// font awesome 


// Custom componets
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Slider from './components/slider';
import Footer from './components/footer';
// Custom Css

import './stylesheets/navbar.css';
import './stylesheets/sidebar.css';
import './stylesheets/slider.css';
import './stylesheets/footer.css';
// images
import Dp from "./assets/profilepg.jpg";


// status images
import  status from "./assets/status/nightwithhut.jpg";
import  status2 from "./assets/status/climber.jpg";
import  status3 from "./assets/status/girl_face.jpg";
import  status4 from "./assets/status/snowed-land_800x1200.jpg";
import  status5 from "./assets/status/nightwithhut.jpg";
import  status6 from "./assets/status/climber.jpg";
import  status7 from "./assets/status/wine-glass.jpg";

const profile_name="Marvin McKinney";
const username="@marvin";

// 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar first="Home" second="Community" third="Pages" fourth="Blog" fifth="Shop" sixth="Courses" profile={Dp} />
    <Sidebar profile_photo={Dp} profile_name={profile_name} profile_username={username} />
   <Slider img={status} img2={status2} img3={status3} img4={status4} img5={status5} img6={status6} img7={status7}/>
   <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
