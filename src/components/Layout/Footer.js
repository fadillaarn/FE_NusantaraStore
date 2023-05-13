import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='text-center'>
            All Rights Reserved &copy; Nusantara
            <p className='text-center mt-3'>
                <Link to='/about'>About</Link>

                <Link to='/contact'>Contact</Link>

                <Link to='/policy'>Privacy Policy</Link>
            </p>
        </h1>
    </div>
  )
}

export default Footer