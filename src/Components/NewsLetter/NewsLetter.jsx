import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe to our newsletter to stay updated</p>
            <div className='newsLetterInput'>
                <input type="email" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter