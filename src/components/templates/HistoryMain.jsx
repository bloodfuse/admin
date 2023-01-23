import React from 'react'
import HistoryTable from './../organisms/HistoryTable';
import { data } from './../../utils/DemoConst';
import TopBar from './../molecules/TopBar';
import { Send, XMark } from '../atoms/Icons';
import { ArrowSendOut } from './../atoms/Icons';
import EmptyState from '../molecules/EmptyState';
import Text from '../atoms/Text';

const HistoryMain = () => {
  return (
      <>
          <div className="w-full h-auto  overflow-auto bg-zinc-100">
        {/* topbar */}
        <TopBar />

        {/* request table  */}
        <div className="px-5 py-10">
          <div className="w-full bg-white rounded-t-md">
            
            {/* table body */}
            <div className=" flex h-full">
             
              <div className="w-full h-100 flex-col items-center pt-5 px-6">
                {data.length ? (
                      <HistoryTable hist={data} />
                ) : (
                  <EmptyState message={"No History"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default HistoryMain