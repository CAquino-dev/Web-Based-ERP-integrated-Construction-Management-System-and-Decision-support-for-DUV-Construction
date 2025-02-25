import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/Login"}>Login</Link>
    </div>
  )
}

export default UserNavbar
