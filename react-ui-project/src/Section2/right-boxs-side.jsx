import React from 'react'
import Card from './card.jsx'

const Right_boxs_side = (props) => {
  // console.log(props.users)
  console.log(props.users);
  return (
    <div className='w-4/5 pl-20'>
      <div className="card-list w-full pb-2.5 -mx-2.5 max-w-full scrollbar-thin overflow-auto flex justify-between">
        {
         props.users.map(function(users) {
          //  return <div key={user.id}></div>;
          // const count = count + 1; 
          return <Card img={users.img} intro={users.intro} tag={users.tag}/>
         })
        } 
      </div>
    </div>
  )
} 

export default Right_boxs_side