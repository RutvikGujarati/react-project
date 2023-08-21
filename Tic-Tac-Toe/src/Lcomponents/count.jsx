import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
     <h1>Counter compo.{count}</h1>
    

     <button onClick={()=> setCount(count +1)}>increment</button>

     <h2>Number is {count %2 === 0 ?  'even' : "odd"}</h2>
     
     <button onClick={()=> setCount(count -1)}>Decrement</button>
     </div>
  );
  }


