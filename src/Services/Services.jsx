import React from 'react'
import './Services.css'
import { BiSolidBuildings } from "react-icons/bi";
import { ImMakeGroup } from "react-icons/im";
import { FaHandshakeAngle } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa6";
import { PiCompassToolBold } from "react-icons/pi";
import { MdElectricalServices } from "react-icons/md";

function Services() {
  return (
    <div className="services">
        <h1>Services</h1>
        <div className="container">
            <div className="b1">
                <div className="box" style={{background:"white"}}>
                    <div className="up">
                        <BiSolidBuildings style={{fontSize:"10vh",color:"#2947A9"}}/>
                    </div>
                    <div className="line"></div>
                    <div className="down">
                        <h2 style={{color:"#2947A9"}}>Construction</h2>
                    </div>
                </div>
                <div className="box" style={{background:"#2947A9"}}>
                    <div className="up">
                        <ImMakeGroup style={{fontSize:"10vh",color:"white"}}/>
                    </div>
                    <div className="line" style={{background:"white"}}></div>
                    <div className="down">
                        <h2 style={{color:"white"}}>Renovation</h2>
                    </div>
                </div>
                <div className="box" style={{background:"white"}}>
                    <div className="up">
                        <FaHandshakeAngle style={{fontSize:"10vh",color:"#2947A9"}}/>
                    </div>
                    <div className="line"></div>
                    <div className="down">
                        <h2 style={{color:"#2947A9"}}>Consultation</h2>
                    </div>
                </div>
            </div>
            <div className="b1">
                <div className="box" style={{background:"#2947A9"}}>
                    <div className="up">
                        <FaToolbox style={{fontSize:"10vh",color:"white"}}/>
                    </div>
                    <div className="line" style={{background:"white"}}></div>
                    <div className="down">
                        <h2 style={{color:"white"}}>Repair Services</h2>
                    </div>
                </div>
                <div className="box" style={{background:"white"}}>
                    <div className="up">
                        <PiCompassToolBold style={{fontSize:"10vh",color:"#2947A9"}}/>
                    </div>
                    <div className="line"></div>
                    <div className="down">
                        <h2 style={{color:"#2947A9"}}>Architecture</h2>
                    </div>
                </div>
                <div className="box" style={{background:"#2947A9"}}>
                    <div className="up">
                        <MdElectricalServices style={{fontSize:"10vh",color:"white"}}/>
                    </div>
                    <div className="line" style={{background:"white"}}></div>
                    <div className="down">
                        <h2 style={{color:"white"}}>Electric</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services