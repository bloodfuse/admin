import { VerticalThreeDots } from "../atoms/Icons";
import Text from "../atoms/Text";
import moment from "moment";

const RequestTableRow = ({ data = null }) => {
  return (
    <>
      <div className="rounded-sm bg-zinc-100 flex items-center py-5 mb-4">
        <div className="my-4 w-full px-10 flex">
          <div className="flex justify-center items-center">
            <img
              src={data.img}
              alt="avatar"
              className=" h-10 w-10 rounded-full ring-2 mr-2 ring-white"
            />
          </div>
          <Text
            className={
              "text-zinc-400 pl-4 w-[23%] flex items-center font-medium"
            }
          >
            {data.name}
          </Text>
          <Text
            className={
              "text-zinc-400 px-3 font-medium border-r-2 flex items-center border-zinc-300"
            }
          >
            {data.type}
          </Text>
          <Text
            className={`text-zinc-400 ${
              data.gender === "male" ? "px-5" : "px-3"
            } font-medium border-r-2 flex items-center border-zinc-300`}
          >
            {data.gender}
          </Text>
          <Text
            className={
              "text-zinc-400 px-3 font-medium border-r-2 flex items-center border-zinc-300"
            }
          >
            {data.age} years and above
          </Text>
          <span className="min-w-[49%] flex items-center justify-between">
            <Text className={"-left-1 text-zinc-400 pl-3 font-medium"}>
              {data.hospital}
            </Text>
            <span className="flex justify-end right-1">
              <Text className={"text-zinc-400 px-3 font-medium"}>
                {moment(data.time).format("LT")}
              </Text>
              <VerticalThreeDots className={"w-[30px]"} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default RequestTableRow;
