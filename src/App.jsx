import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'
import  AdminDashboard  from './pages/admin/AdminDashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<Homepage/>} />
          <Route path='/Login' element={<Login/>} />
        </Route>
      </Routes>

      <Routes>
        <Route path='/admin' element={<AdminLayout/>} >
          <Route index element={<AdminDashboard/>} />
        </Route>
      </Routes>
    </div>
  )
}
/*************  ✨ Codeium Command ⭐  *************/
/**
 * AppWrapper component wraps the App component with a Router to enable routing.
 * It provides the routing context needed for the application to handle navigation.
 */

/******  96db7757-432d-46e3-9db1-487aa880af2b  *******/
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;