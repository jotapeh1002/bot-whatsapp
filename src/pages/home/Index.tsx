// // App.tsx
// import { useState } from 'react';
// import {
//   FaWhatsapp,
//   FaRobot,
//   FaBullhorn,
//   FaShoppingCart,
//   FaChartLine,
//   FaPlug,
//   FaShieldAlt,
//   FaArrowRight,
//   FaBars,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
// } from 'react-icons/fa';
// import a01 from '../../assets/a01.png';

import { Navbar } from "../../shared/components/Navbar";
import { Feed } from "../../shared/components/Feed";


export const Home = () => {
  return (
   <div>
    <Navbar />
    <Feed />
   </div>
  );
};
