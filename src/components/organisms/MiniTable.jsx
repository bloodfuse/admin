import Text from "../atoms/Text";
import moment from 'moment'

const MiniTable = ({ data }) => {
  return (
    <>
      <div className="mt-3 flex justify-between">
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[40%] "
          }
        >
          Recipient
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  "
          }
        >
          Date
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[35%]  "
          }
        >
          Donor
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  "
          }
        >
          Date
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  "
          }
        >
          Status
        </Text>
      </div>
      {/* ----- as table ------ */}
      <div>
        {data.map((x, i) => (
          <div
            key={x.uid}
            className={`flex justify-between gap-px py-4 px-1 ${
              i+1 !== data.length ? "border-b-2 border-zinc-300" : ""
            }`}
          >
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[40%] "
              }
            >
              {x.recipient}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[25%]  "
              }
            >
              {moment(x.date).format('ll')}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[35%]  "
              }
            >
              {x.donor}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[25%]  "
              }
            >
              {moment(x.date).format('ll')}
            </Text>
            <Text
              className={`font-medium !text-[16px] ${
                x.status.toLowerCase() === "completed"
                  ? "text-green-500"
                  : x.status.toLowerCase() === "pending"
                  ? "text-yellow-500"
                  : x.status.toLowerCase() === "canceled"
                  ? "text-rose-500"
                  : "text-black"
              } flex justify-start w-[25%]`}
            >
              {x.status}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default MiniTable;
