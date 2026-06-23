import React from 'react'

const Card = (props) => {
  return (
    <div className='slide-box w-1/3 min-w-1/3 px-2.5'>
        <div className="Card-box rounded-4xl  !leading-0 overflow-hidden">
            <div className="img-wrap">  
                <img src={props.img} alt="" />  
                <div className="card-info p-5 absolute flex-col inset-0 flex justify-between">
                    <h1 className='!text-white'>1</h1>
                    <div className="text-btn-wrap">
                        <p className='card-text !text-white'>{props.intro}</p>
                        <div className="btn-bar flex items-center justify-between">
                            <div className="badge text-2 p-3 text-white text-1xl font-bold bg-blue-700 rounded-4xl xl">{props.tag}</div>
                            <i className="ri-arrow-right-long-fill w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card