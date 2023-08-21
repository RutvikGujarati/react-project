import React,{useEffect, useState} from 'react'

const Timer = () => {

  const [Time, setTime] = useState(10);

  useEffect(()=>{
   const timer = setTimeout(()=> setTime(Time +1), 1000)
  }, [Time])
    return (
    <div>
      <h1>Stopwatch</h1>
      <p>current time is {Time}</p> 
    </div>
  )
}
