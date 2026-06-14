import React from 'react'
import '../styles/header.css';

const  Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="flex-container">
                <h3>Rana</h3>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Service</a>
                    <a href="#">Blogs</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contects</a>
                </nav>
                <a href="#" className='button btn-theme'>App</a>
            </div>
        </div>
    </div>
  )
}

export default Header