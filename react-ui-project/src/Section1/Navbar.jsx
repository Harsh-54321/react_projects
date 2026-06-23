import React from 'react'
// import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="inline-flex w-full items-center justify-between">
        <div className="logo">
          <img src="../src/assets/logo.png" height={100} width={100} alt="Logo" />
        </div>
        <nav className='inline-flex items-center flex-grow leading-normal gap-10 w-full lh justify-center'>
            <a href="#">home</a>
            <a href="#">About</a> 
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
        </nav>
        <a href="#" className="button btn-theme min-w-fit">Get a Quote</a>
    </div>
  )
}

export default Navbar