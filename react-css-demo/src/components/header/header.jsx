import React from 'react'
import styles from '../header/header.module.css';
// import button from '../button/button.jsx';
import Button1 from '../button/button.jsx'


const  Header = () => {
  return (
    <div className={`${styles.header} headrer`}>
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
                <Button1 />
                {/* <a href="#" className={styles.}>App</a> */}
                {/* {<button />}
                {console.log(button)} */}
            </div>
        </div>
    </div>
  )
}

export default Header