import React from 'react'

const Prop = (users) => {
    console.log(users);
    
    return (
    <div className="card">
        <div className="img-wrap">
        <img src="https://images.unsplash.com/photo-1778409588609-0d59abd6394d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h2>{users.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum?</p>
        <a href="#" className='button btn-theme'>READ MORE</a>
    </div>
  )
}

export default Prop