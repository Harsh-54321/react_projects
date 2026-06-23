import React from 'react'
import Section1 from "../src/Section1/Section1.jsx";
import Section2 from "../src/Section2/Section2.jsx";
const App = () => {

  const users = [
    {
      img:"../../src/assets/card_1.jpg",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus voluptas voluptatem mollitia nam nobis illo quasi, nostrum vitae neque autem cupiditate minus asperiores deserunt!",
      tag:"Satisfied"
    },
    {
      img:"../../src/assets/card_2.jpg",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus vero repellat eligendi reprehenderit perspiciatis fugiat consequatur similique adipisci perferendis.",
      tag:"Underserved"
    },
    {
      img:"../../src/assets/card_3.jpg",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero quasi provident, vel itaque voluptas? Nisi iste et consequatur!",
      tag:"Underban"
    },
    {
      img:"../../src/assets/card_4.jpg",
      intro:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut impedit illo eligendi dolorem ratione explicabo est, cupiditate eveniet ex consectetur nobis!",
      tag:"Satisfied"
      
    } 
  ]
  return (
    <>
      <Section1 />
      <Section2 users={users} />
    </>
  )
}

export default App