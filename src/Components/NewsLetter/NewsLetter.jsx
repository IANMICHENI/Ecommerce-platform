import React from 'react'
import './NewsLetters.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Excusive Offers On Your Email</h1>
        <p>Subscribe to Our newsletter and stay updated</p>
   <div>
    <input type="email" placeholder='your email id' />
    <button>Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLetter
