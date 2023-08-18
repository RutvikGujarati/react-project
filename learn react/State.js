import React , {useState, useEffect} from 'react'
import "./App.css"

const State = () => {
    const [count, setCount] = useState(0);

   useEffect(()=>{
    console.log(count); //or we can change the value of counter using useeffect
    setCount(500);
   },[count])

   //set the initial value of counter is 0
  
   return (
    <div className='App'>
      <button onClick={() => {setCount(50)}}>SetCount</button>
      <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount)=> prevCount+1)}>+</button>
    </div>
  )
}

export default State
