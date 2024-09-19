import React from 'react' 
import { Outlet } from 'react-router-dom' 
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

export default function Layout() {
  return (
    <div>
      <Header />
      <div clasName='mt-5 pt-5'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
