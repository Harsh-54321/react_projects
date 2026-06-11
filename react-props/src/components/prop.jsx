import React from 'react'

const Prop = (users) => {
    console.log(users);
    
    return (
    <div className="card">
        <div className="img-wrap">
          <img src={users.img} alt="" />
        </div>
        <h2>{users.name}-{users.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum?</p>
        <a href="#" className='button btn-theme'>READ MORE</a>
    </div>
  )
}

export default Prop