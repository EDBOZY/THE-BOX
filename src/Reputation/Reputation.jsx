import React from 'react'
import './Reputation.css'
import { MdOutlineDesignServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { MdConstruction } from "react-icons/md";

function Reputation() {
  return (
    <div className="reputation">
        <h1 className='head'>Our Reputation</h1>
        <div className="container">
            <div className="box">
                <div className="up">
                    <MdOutlineDesignServices style={{fontSize:"10vh",padding:"5px",color:"orange"}}/>
                </div>
                <div className="mid">
                    <h2>Best Designs</h2>
                </div>
                <div className="down">
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
            </div>
            <div className="box">
                <div className="up">
                    <RiTeamFill style={{fontSize:"10vh",padding:"5px",color:"orange"}}/>
                </div>
                <div className="mid">
                    <h2>Best Team</h2>
                </div>
                <div className="down">
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
            </div>
            <div className="box">
                <div className="up">
                    <MdConstruction style={{fontSize:"10vh",padding:"5px",color:"orange"}}/>
                </div>
                <div className="mid">
                    <h2> Best Services</h2>
                </div>
                <div className="down">
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reputation