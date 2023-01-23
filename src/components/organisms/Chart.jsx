import { Suspense, lazy } from "react";
import Card from "../atoms/Card";
import { ArrowUpBold, DownUp } from "../atoms/Icons";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";

const LazyCircularBar = lazy(() => import("../molecules/CircularBar"));

const Chart = ({ className = "", data }) => {
  return (
    <Card className={`${className} px-5 h-[18rem] flex-col gap-5 bg-white`}>
      <div className="flex justify-start items-start w-full pl-3">
        <Heading className="!text-[24px] !font-semibold" level={2}>
          {data.title}
        </Heading>
      </div>

      <div className="flex justify-between items-center gap-5">
        <Suspense fallback="loading data ...">
          <LazyCircularBar data={data} />
        </Suspense>
        <div className="flex-col">
          <div className="flex-col">
            <Text className="text-black font-medium">This Month</Text>
            <span style={{ color: `${data.color}` }}>
              <Text isIcon={!0} className="flex items-center -px-3 font-bold">
                <ArrowUpBold className={`w-[20px]`} />
                {data.percentUp}%
              </Text>
            </span>
          </div>

          <div className="flex-col mt-4">
            <Text className="text-black font-medium">Last Month</Text>
            <Text
              isIcon={!0}
              className="text-slate-300 !text-sm flex items-center -px-3 font-medium"
            >
              <DownUp className={`w-[16px]`} />
              {data.percentDown}%
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Chart;
