import React from 'react'

const UserCard = (props) => {
  return (
    <div className='user-card'>
   
     <h3>{props.name}</h3>
     <h4>Email</h4>
     <p>Gender</p>
    </div>
  )
}

export default UserCard
