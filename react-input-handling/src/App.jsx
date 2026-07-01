import React from 'react'
import './App.css'

const App = () => {
  const submitHandler = (e) => { 
    e.preventDefault()
    console.log("form Submited.");
  }
  return (
    <section className='py-30 text-center bg-violet-500'>
      <div className="container">
         <form action="" className='w-150 text-center mx-auto block' onSubmit={(e) => { 
          submitHandler(e)
         }} >
            <input type="text"  placeholder='Enter Your Name' />
            <button className='btn-theme button'>SUBMIT</button>
         </form>
      </div>
    </section>  
  )
}

export default App