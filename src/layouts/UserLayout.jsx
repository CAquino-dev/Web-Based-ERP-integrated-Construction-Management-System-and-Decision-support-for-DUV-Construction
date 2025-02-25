import React from 'react'
import { Outlet } from 'react-router-dom'

import UserNavbar from '../components/UserNavbar'
import Homepage from '../pages/Homepage'

const UserLayout = () => {
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
    </div>
  )
}

export default UserLayout
