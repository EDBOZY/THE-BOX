import React from 'react'
import './Experience.css'
import { FaHandshakeAngle } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { FaTrophy } from "react-icons/fa";
import { RiRoadMapFill } from "react-icons/ri";

function Experience() {
  return (
    <div className="experience">
        <div className="container">
            <div className="left">
                <div className="box one">
                    <div className="al">
                    <h1>84</h1>
                    <FaHandshakeAngle style={{fontSize:"10vh",position:"relative",left:"20vh",top:"-8vh"}}/>
                    </div>
                    <div className="al">
                        <div className="line"></div>
                        <br/>
                        <span>Happy Clients</span>
                    </div>
                    
                </div>
                <div className="box two">
                <div className="al">
                    <h1>123</h1>
                    <CgNotes style={{fontSize:"10vh",position:"relative",left:"-25vh",top:"-7vh"}}/>
                    </div>
                    <div className="al">
                        <div className="line"></div>
                        <br/>
                        <span>Projects Completed</span>
                    </div>
                </div>
                <div className="box three">
                <div className="al">
                    <h1>37</h1>
                    <FaTrophy style={{fontSize:"10vh",position:"relative",left:"18vh",top:"-7vh"}}/>
                    </div>
                    <div className="al">
                        <div className="line"></div>
                        <br/>
                        <span>Awards Win</span>
                    </div>    
                </div>
                <div className="box four">
                <div className="al">
                    <h1>30</h1>
                    <RiRoadMapFill style={{fontSize:"10vh",position:"relative",left:"-19vh",top:"-8vh"}}/>
                    </div>
                    <div className="al">
                        <div className="line"></div>
                        <br/>
                        <span>Years in Business</span>
                    </div>   
                </div>    
            </div>
            <div className="right">
                <h1>30 Years Experience</h1>
                <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Experience