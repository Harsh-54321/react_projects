import  { useState } from 'react'
import './App.css'

const App = () => {

  const [title, setTitle] = useState('')

  // This is an Function call on click
  const submitHandler = (e) => { 
    e.preventDefault()
    console.log("form Submited.");
    e.target.value = "";
    setTitle(e.target.value);
  }

  // This is an Function call on input, on change
  // const onChangeEevnt = (e) => {
  //   e.preventDefault()
    // console.log("Inputing");  //  shown colsole "inputing"
    // console.log(e);  //  shown colsole "event"
    // console.log(e.target);  //  shown colsole "targeted input"
    // console.log(e.target.value)   //  shown colsole "inputing" value
    // console.log("function is runing")
    // setTitle(e.tarWget.value);
  // }
  
  return (
    <section className='py-30 text-center bg-violet-500'>
      <div className="container">
        <form action="" className='w-150 text-center mx-auto block' 
          onSubmit={(e) => {
            console.log("runing. ..."); 
            submitHandler(e)
          }} 
        >

          {/* this is an expmle of Tow way binding  */}
          
          <input type="text"  placeholder='Enter Your Name' 
            onChange={(e) => {
              console.log("runing. ...");
              setTitle(e.target.value)
            }} 
            value={title} 
          />
          <button className='btn-theme button'>
            SUBMIT
          </button>
        </form>
      </div>
    </section>  
  )
}

export default App