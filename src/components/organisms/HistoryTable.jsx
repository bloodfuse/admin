import React from 'react'
import Text from '../atoms/Text'
import moment from 'moment'
const HistoryTable = ({ hist }) => {
  console.log(hist)
  return (
    <>
      <div className="mt-3 flex justify-between">
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[40%] '
          }
        >
          Name
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[40%] '
          }
        >
          Recipient
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
          }
        >
          Time
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
          }
        >
          Date
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[35%]  '
          }
        >
          Donor
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
          }
        >
          Blood Type
        </Text>
        <Text
          className={
            'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
          }
        >
          Status
        </Text>
      </div>
      {/* ----- as table ------ */}
      <div>
         {hist.map((hist, i) => (
          <div
            key={hist.uid}
            className={`flex justify-between gap-px py-4 px-1 ${
              i + 1 !== hist.length ? 'border-b-2 border-zinc-300' : ''
            }`}
          >
          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[40%] '
            }
          >
            {hist.name}
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[40%] '
            }
          >
            {hist.recipient}
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[40%] '
            }
          >
            {moment(hist.time).hour()}
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[25%]  '
            }
          >
            {moment(hist.date).format('ll')}
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[35%]  '
            }
          >
            {hist.donor}
          </Text>

          <Text
            className={
              'font-medium !text-[16px] text-black flex justify-start w-[35%]  '
            }
          >
            {hist.type}
          </Text>
          
          <Text
            className={`font-medium !text-[16px] ${
              hist.status === 'completed'
                ? 'text-green-500'
                : hist.status === 'pending'
                ? 'text-yellow-500'
                : hist.status === 'canceled'
                ? 'text-rose-500'
                : 'text-black'
            } flex justify-start w-[25%]`}
          >
            {hist.status}
          </Text>
             </div>
             ))}
      </div>
    </>
  )
}

export default HistoryTable
