import React from 'react'
import './App.css'
import Card from './components/prop.jsx'

const App = () => {
  return (
    <div className="container">
      <div className="flex-container">
        {/* <Card user="rana harsh" /> */}
        <Card name="rana harsh" age={18} img='https://images.unsplash.com/photo-1778409588703-e031779966b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card name="gupta vishal" age={41} img='https://images.unsplash.com/photo-1702053174656-531b4d6c6960?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card name="diptesh prajapti" age={30} img='https://plus.unsplash.com/premium_photo-1670515870917-7e6d5065dba1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card name="kamlesh kumavat" age={32} img='https://plus.unsplash.com/premium_photo-1768742409101-f2a31c9f761e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        {/* <Card name="rana harsh" /> */}
      </div>
    </div>
  )
}

export default App