import React from 'react'
import { Link } from 'react-router-dom'
import EmpInput from './empinput'
import LogoutButton from '../components/LogOutButton/LogoutButton'

export default function EmpDashboard() {
  return (
    <div>
      <div>emp_dashboard</div>
      <LogoutButton/>
      <div className='flex justify-center mt-4'>
        <Link to="/empinput">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Go to Employee Input
          </button>
        </Link>
      </div>
    </div>
  )
}