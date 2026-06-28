import React from 'react'
import './App.css'
import { useState} from 'react'


const App = () => {

  // this function is use to setvalues to by increament of 1

  const [counter, setCounter] = useState(15);
  const [user, setUser] = useState('GOVINDA') 
  const Addvalue = () => {
    if(counter >= 20) {
      alert("Counter value is greater than 20");
      return;
    } else {
      setCounter(counter + 1);
      console.log("click:", counter);
      setUser("Radhe Radhe");
    }
  }

  // this function is use to setvalues to by decreament of 1

  const Removevalue = () => {
    if(counter <= 0) {
      alert("Counter value is less than 0");
      return;
    } else {
      setCounter(counter - 1);
      console.log("click:", counter);
      setUser("Krishna");
    }
  }

  // this function is use demonstraite the change the values of object 

  const [userInfo, setUserInfo] = useState({user:'John Doe', age:25})

  const changeUserInfo = () => { 
    const newuserinfo = {...userInfo};
    newuserinfo.user = "HARSH"
    newuserinfo.age = "30"
    setUserInfo(newuserinfo);
  }


  // this function is use demonstraite the change the values of Array
  
  const [Arr, setArr] = useState([10, 20, 30, 40])
  
  const ChangearrInfo = () => { 
    const newArr = [...Arr]
    newArr.push(60)
    // console.log(newarr)
    setArr(newArr);
  }

  return (
    
    <>
      <section className=' w-full py-30'>
        <div className="container">
            <h1 className='text-xl text-red-600 text-center font-bold'>Welcome to React</h1>
            <div className="flex-container justify-center flex-wrap">
              <h2 className='!uppercase w-full text-center'>Conter values: <span className='inline-block bold text-blue-700 '>{counter}</span></h2>
              <h3 className='text-lg text-gray-700 w-full text-center'>This is our user: {user}</h3>
            </div>
            <div className="btnbar flex justify-center gap-5">
              <a href="#" onClick={Addvalue} className='button btn-theme !hover:bg-violet-600'>ADD VALUE</a>
              <a href="#" onClick={Removevalue} className='button btn-theme hover:bg-black'>REMOVE VALUE</a>
            </div>
        </div>
      </section>  

      <section className='py-30 w-full text-center bg-amber-50'>
        <div className="container">
            <h1 className='text-xl text-red-600 text-center font-bold'>Welcome to React</h1>
            <h2 className='text-orange-700 text-center'>This is a user name: {userInfo.user}, age: {userInfo.age}</h2>
            <a href="#" onClick={changeUserInfo} className='button btn-theme mx-auto !hover:bg-violet-600'>CHANGE USER INFO</a>
          </div>
      </section>

      <section className='py-30 w-full text-center bg-gray-500'>
        <div className="container">
          <h1 className='!text-white'>This is Array::: {Arr} </h1>
          <a href="#" onClick={ChangearrInfo} className='button btn-theme mx-auto !hover:bg-violet-600'>CHANGE Array</a>
        </div>
      </section>
    </>
  ) 
}

export default App