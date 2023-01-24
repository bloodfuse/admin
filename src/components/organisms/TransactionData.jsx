import React from "react";
import InputBox from "../atoms/InputBox";
import Text from "../atoms/Text";
const TransactionData = ({ data }) => {
  return (
    <>
      <div className="mt-3 flex w-full items-center">
        <div className="flex w-full justify-between items-center">
          <InputBox type={`radio`} className="w-10 h-10" isIcon={!1} />
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[25%] "}
          >
            Name
          </Text>
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[10%]  "}
          >
            Amount
          </Text>
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[25%]  "}
          >
            Hospital
          </Text>
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[30%]  "}
          >
            Address
          </Text>
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[25%]  "}
          >
            Receiver
          </Text>

          <Text
            className={"font-medium !text-[16px] flex justify-start w-[30%]  "}
          >
            Receiver Address
          </Text>
          <Text
            className={"font-medium !text-[16px] flex justify-start w-[15%]  "}
          >
            Status
          </Text>
        </div>
      </div>

      <div>
        {data.map((x, i) => (
          <div className="mt-3 flex w-full items-center">
            <div
              key={x.uid}
              className={`flex w-full justify-between items-center`}
            >
              <InputBox type={`radio`} className="w-10 h-10" isIcon={!1} />
              <Text
                className={
                  "font-medium !text-[16px] text-zinc-400 flex justify-start w-[25%] "
                }
              >
                {x.name}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] flex justify-start w-[10%] "
                }
              >
                {x.amount}{'STX'}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] text-zinc-400 flex justify-start w-[25%] "
                }
              >
                {x.hospital}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] flex justify-start w-[30%] "
                }
              >
                {x.Address.length > 25
                  ? `${x.Address.slice(0, 25)}...`
                  : x.Address}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] text-zinc-400 flex justify-start w-[25%] "
                }
              >
                {x.Receiver}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] flex justify-start w-[30%] overflow-hidden"
                }
              >
                {x.ReceiverAddress.length > 25
                  ? `${x.ReceiverAddress.slice(0, 25)}...`
                  : x.ReceiverAddress}
              </Text>
              <Text
                className={
                  "font-medium !text-[16px] text-zinc-400 flex justify-start w-[15%]"
                }
              >
                {x.status}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TransactionData;
