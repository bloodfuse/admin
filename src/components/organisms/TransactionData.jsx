import React from 'react'
import InputBox from '../atoms/InputBox'
import Text from '../atoms/Text'
const TransactionData = ({ data }) => {
  return (
    <>
      <div className="mt-3 flex w-full items-center">
        <div className="flex w-full justify-between items-center">
          <InputBox type={`radio`} className="w-10 h-10" isIcon={!1} />
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[40%] '
            }
          >
            Name
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
            }
          >
            Amount
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[35%]  '
            }
          >
            Hospital
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
            }
          >
            Address
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
            }
          >
            Receiver
          </Text>

          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
            }
          >
            Receiver Address
          </Text>
          <Text
            className={
              'font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  '
            }
          >
            Status
          </Text>
        </div>
      </div>

      <div>
        {data.map((x, i) => (
          <div
            key={x.uid}
            className={`flex justify-between gap-px py-4 px-1 ${
              i + 1 !== data.length ? 'border-b-2 border-zinc-300' : ''
            }`}
          >
            <InputBox type={`radio`} className="w-10 h-10" isIcon={!1} />
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.name}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.amount}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.hospital}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.Address}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.Receiver}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.ReceiverAddress}
            </Text>
            <Text
              className={
                'font-medium !text-[16px] text-black flex justify-start w-[40%] '
              }
            >
              {x.status}
            </Text>
          </div>
        ))}
      </div>
    </>
  )
}

export default TransactionData
