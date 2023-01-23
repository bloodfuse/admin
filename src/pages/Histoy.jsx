import React from 'react'
import HistoryMain from '../components/templates/HistoryMain';
import SideBar from './../components/molecules/SideBar';

const Histoy = () => {
  return (
   <div className="flex w-full h-screen">
          <SideBar />
          <HistoryMain/>
    </div>
  )
}

export default Histoy