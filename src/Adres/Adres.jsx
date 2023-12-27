import React from 'react'
import './Adres.css'
import a from './logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Adres() {
  return (
    <div className="adres">
        <div className="container">
            <div className="left">
                <div className="l">
                    
                    <span>Address:</span>
                    <span>Phone:</span>
                    <span>Email:</span>
                    <img src={a} alt="" />
                </div>
                <div className="r">
                    <span>6391 Elgin St. Celina, Delaware 10299</span>
                    <span>+84 1102 2703</span>
                    <span>hello@thebox.com</span>
                </div>
                {/* <span>Address:6391 Elgin St. Celina, Delaware 10299</span>
                <span>Phone:+84 1102 2703</span>
                <span>Email:hello@thebox.com</span> */}
                
            </div>
            <div className="right">
                <label>NEWSLATER:</label>
                <div className="input">
                    <input type="email" placeholder='Enter your email' />
                    <button>SUBCRIBE</button>
                </div>
                <label >SOCIALS</label>
                <div className="socials">
                    <div className="icon"><FaFacebook style={{color:"#2947A9",marginTop:"1vh",fontSize:"5vh"}}/></div>
                    <div className="icon"><FaFacebook style={{color:"#2947A9",marginTop:"1vh",fontSize:"5vh"}}/></div>
                    <div className="icon"><FaInstagram style={{color:"#2947A9",marginTop:"1vh",fontSize:"5vh"}}/></div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Adres