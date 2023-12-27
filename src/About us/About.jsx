import React from 'react'
import './About.css'
import a from './main.png'

function About() {
  return (
    <div className="about">
        <div className="container">
            <div className="left">
                <img src={a} alt="" />
            </div>
            <div className="right">
                <div className="up">
                    <h1> About us</h1>
                </div>
                <div className="mid">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur deserunt at sapiente quas alias cupiditate ea nisi, magni fugiat error temporibus facilis accusamus et laboriosam labore odit ullam blanditiis voluptatum.</p>
                    <br/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur deserunt at sapiente quas alias cupiditate ea nisi, magni fugiat error temporibus facilis accusamus et laboriosam labore odit ullam blanditiis voluptatum.</p>

                </div>
                <div className="bottom">
                    <button>More on our History</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About