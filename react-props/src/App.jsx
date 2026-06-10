import React from 'react'
import './App.css'
import Card from './components/prop.jsx'

const App = () => {
  return (
    <div className="container">
      <div className="flex-container">
        
        {/* <Card user="rana harsh" /> */}
        <Card name="rana harsh" />
        <Card name="gupta vishal" />
        <Card name="diptesh prajapti" />
        <Card name="kamlesh kumavat" />
        {/* <Card name="rana harsh" /> */}
      </div>
    </div>
  )
}

export default App