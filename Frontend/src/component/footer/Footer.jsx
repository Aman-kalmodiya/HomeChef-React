import React from 'react'
import './footer.css'
import logo from './HomeChef.jpeg';
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='=footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src = {logo} id="logo"></img>
        <p>Healthy eating made effortless Meal-kit convenience.</p>
           <div className="footer-social-icons">
            <img src ={assets.facebook_icon} alt="" />
            <img src ={assets.twitter_icon} alt="" />
            <img src ={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>

        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 78794 03195</li>
                <li>contact@HomeChef.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyrigth">copyright 2024 @ homechef.com - All right reserverd.</p>
           </div>
     
  )
}

export default Footer;

    

     