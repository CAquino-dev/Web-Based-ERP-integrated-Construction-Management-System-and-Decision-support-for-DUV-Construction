import React from 'react'
import { Link } from 'react-router-dom'
import DUV from "../assets/DUVLogoWhite.png"


const UserNavbar = () => {
  return (
    <div className='flex fixed top-0 left-0 right-0 bg-[#4c735c] h-[60px] justify-between px-10 mb-[60px]'>
      <div className='left-section flex items-center font-[900]'>
        <div className='w-[100px]'>
          <img src={DUV} alt="" />
        </div>
      </div>
      <div className='right-section flex items-center w-[500px] justify-between text-white font-[700]'>
        <Link to="projects" >Projects</Link>
        <Link to="our-team" >Our Team</Link>
        <Link to="about-us" >About us</Link>
        <Link to={"/Login"}>Login</Link>
      </div>
    </div>
  )
}

export default UserNavbar
