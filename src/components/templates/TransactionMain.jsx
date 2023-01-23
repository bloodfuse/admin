import React from 'react'
import { ArrowSendOut, PlusOutline, Send, Settings, XMark } from '../atoms/Icons'
import Text from '../atoms/Text'
import EmptyState from '../molecules/EmptyState'
import SearchBar from '../molecules/SearchBar'
import RequestTableRow from '../organisms/RequestTableRow'
import { Transacts } from './../../utils/DemoConst';
import TransactionData from './../organisms/TransactionData';
import TopBar from './../molecules/TopBar';

const TransactionMain = () => {
  return (
          <div className="w-full h-auto  overflow-auto bg-zinc-100">
        {/* topbar */}
        <TopBar />

        {/* request table  */}
        <div className="px-5 py-10">
          <div className="w-full bg-white rounded-t-md">
            {/* table body */}
            <div className=" flex h-full">
         
              <div className="w-full h-100 flex-col items-center pt-5 px-6">
                {Transacts.length ? (
                    <TransactionData data={Transacts} />
                  ) : (
                  <EmptyState message={"No Transactions"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TransactionMain 