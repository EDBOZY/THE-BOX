import React from 'react'
import './Top.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Top() {
  return (
    <div className="top">
        <div className="container">
            <div className="left">
                <div className='w'>
                    ffff
                </div>
                <IoPhonePortraitOutline style={{color:"white"}}/>:84 1102 2703
                <div className='w'>
                    ffff
                </div>
                <IoMdMail style={{color:"white"}} />:hello@thebox.com
                </div>
            <div className="right">
                <FaFacebook style={{color:"white"}}/>
                <FaInstagram style={{color:"white"}}/>
            </div>
        </div>
    </div>
  )
}

export default Top