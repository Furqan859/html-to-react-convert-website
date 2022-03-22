import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import LoginSection from '../components/LoginSectionsty/LoginSection'
import SignUp from '../components/LoginSectionsty/SignUp'


export default function UnprotectedLayout() {
  return (
    <div>





      <Outlet />
    </div>

  )
}