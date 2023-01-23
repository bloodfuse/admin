import React from 'react'
import SideBar from '../components/molecules/SideBar'
import TransactionMain from '../components/templates/TransactionMain';

const Transaction = () => {
  return (
      <div className="flex w-full h-screen">
          <SideBar />
          <TransactionMain/>
    </div>
  )
}

export default Transaction