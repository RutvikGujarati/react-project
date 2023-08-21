import React from 'react'
import "../App.css"

const Header = () => {
    const link = `https://github.com/RutvikGujarati`;
    const redirecting = () =>{
        window.location.href = link;
    }
  return (
    <div>
      <button className='btn' onClick={redirecting}>Click to go github</button>
    </div>
  )
}

export default Header
