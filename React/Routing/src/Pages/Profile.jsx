import React from 'react'
import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/login")
  }
  
  return (
    <div>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Profile