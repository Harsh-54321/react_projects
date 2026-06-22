import React from 'react'
import Card from './card.jsx'

const Right_boxs_side = () => {
  return (
    <div className='w-4/5 pl-20'>
      <div className="card-list w-full pb-2.5 -mx-2.5 max-w-full scrollbar-thin overflow-auto flex justify-between">
        <Card  img='../../src/assets/card_1.jpg' />
        <Card  img='../../src/assets/card_2.jpg' />
        <Card  img='../../src/assets/card_3.jpg' />
        <Card  img='../../src/assets/card_4.jpg' />
      </div>
    </div>
  )
}

export default Right_boxs_side