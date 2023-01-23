import Text from "../atoms/Text";
import moment from "moment";

const DonorTable = ({ data }) => {
  return (
    <>
      <div className="mt-3 flex justify-between">
        <Text className={"flex justify-start w-[15%] "}></Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[40%] "
          }
        >
          Name
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  "
          }
        >
          Gender
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[35%]  "
          }
        >
          Location
        </Text>
        <Text
          className={
            "font-medium !text-[16px] text-gray-400 flex justify-start w-[25%]  "
          }
        >
          Phone
        </Text>
      </div>
      {/* ----- as table ------ */}
      <div>
        {data.map((x, i) => (
          <div
            key={x.uid}
            className={`flex justify-between gap-px py-4 px-1 ${
              i + 1 !== data.length ? "border-b-2 border-zinc-300" : ""
            }`}
          >
            <span className={"text-black flex justify-start w-[15%] "}>
              <div className="flex justify-center items-center" ><img
                src={x.image}
                alt="avatar"
                className=" h-10 w-10 rounded-full ring-2 mr-2 ring-white"
              /></div>
            </span>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[40%] "
              }
            >
              {x.name}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[25%]  "
              }
            >
              {x.gender}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[35%]  "
              }
            >
              {x.location}
            </Text>
            <Text
              className={
                "font-medium !text-[16px] text-black flex justify-start w-[25%]  "
              }
            >
              {x.phnNumb}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default DonorTable;
