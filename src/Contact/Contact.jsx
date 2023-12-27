import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <h1>What can us do for you?</h1>
            <span>We are ready to work on a project of any complexity,
                 whether it’s commercial or residential.</span>
            <div className="inputs">
                <input type="text" placeholder="Your name*" />
                <input type="text" placeholder='Phone No*' />
            </div> 
            <div className="inputs">
                <input type="text"  placeholder='Reason for contacting*'/>
                <input type="email" placeholder='Email*'/>
            </div>
            <textarea placeholder='Message' cols="30" rows="10"></textarea>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Contact