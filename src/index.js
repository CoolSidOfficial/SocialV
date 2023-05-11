import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// font awesome 


// Custom componets
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
// Custom Css

import './stylesheets/navbar.css';
import './stylesheets/sidebar.css';

// images
import Dp from "./assets/profilepg.jpg";

const profile_name="Marvin McKinney";
const username="@marvin";

// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar first="Home" second="Community" third="Pages" fourth="Blog" fifth="Shop" sixth="Courses" profile={Dp} />
    <Sidebar profile_photo={Dp} profile_name={profile_name} profile_username={username} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
