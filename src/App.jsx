import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import UserLayout from './layouts/UserLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<Homepage/>} />
          <Route path='/Login' element={<Login/>} />
        </Route>
      </Routes>
    </div>
  )
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;