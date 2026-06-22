import React from 'react'

const Card = (Props) => {
  return (
    <div className='slide-box w-1/3 min-w-1/3 px-2.5'>
        <div className="Card-box rounded-4xl  !leading-0 overflow-hidden">
            <div className="img-wrap">
                <img src={Props.img} alt="" />  
                <div className="card-info">
                    <h1>1</h1>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card