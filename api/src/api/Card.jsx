import React from 'react'

const Card = (props) => {
  return (
    <div className='postCard'>
      <h3>{props.Title}</h3>
      <p>{props.Body}</p>
    </div>
  )
}

export default Card
