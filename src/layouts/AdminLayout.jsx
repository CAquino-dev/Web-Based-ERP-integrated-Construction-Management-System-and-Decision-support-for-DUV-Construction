import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideNav from '../components/AdminSideNav'

const AdminLayout = () => {
  return (
    <div>
      <AdminSideNav />
      <Outlet />
    </div>
  )
}

export default AdminLayout
