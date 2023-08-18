import React from 'react'
import "./App.css"
import "./props"
import "./State"
import State from './State'


const App = () => {
  return (
    <div className='App'>
      Starting.... to fetch users
      <props user1 ={'rutvik'}/>
      <props  user2 ="gujarati"/>
      <State />
    </div>
  )
}

export default App
