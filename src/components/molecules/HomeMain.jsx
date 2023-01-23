import { Suspense, lazy } from "react";
import { Images } from "../../assets/images";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Chart from "../organisms/Chart";
import MiniTable from "../organisms/MiniTable";
import EmptyState from "./EmptyState";
import Select from "./Select";
import TitleHeader from "./TitleHeader";
import TopBar from "./TopBar";
import {
  listItems,
  listItems2,
  chartData,
  data,
  donors,
  BarValue,
} from "../../utils/DemoConst";
import DonorTable from "../organisms/DonorTable";

const LazyBarChart = lazy(() => import("./BarChart"));

const HomeSection = () => {
  return (
    <div className="w-full h-auto  overflow-auto bg-zinc-100">
      {/* topbar */}
      <TopBar />

      {/* title */}
      <div className="px-5 py-10">
        <div className="flex justify-between">
          <Heading level={2} className="font-bold my-2">
            Overview
          </Heading>
          <Select items={listItems} />
        </div>

        {/* inline chart */}
        <div className="grid grid-cols-4 gap-3 max-w-full shrink-1 my-5">
          {chartData.map((x, i) => (
            <div key={i}>
              <Chart data={x} />
            </div>
          ))}
        </div>

        {/* contents */}
        <div className="flex gap-3">
          <div className="flex-col w-[50%]">
            <div className="bg-white w-full rounded-md shadow-sm px-5 py-6">
              <div className="flex justify-between">
                <Text className={"font-semibold"}>Balance Statistics</Text>
                <div className="flex flex-row-reverse gap-7 justify-center items-center">
                  <Select
                    items={listItems2}
                    parentClass={"my-0 mx-0"}
                    className={`border-none bg-gray-100 !px-2`}
                  />
                  <div className="flex gap-7">
                    <div className="flex justify-center items-center gap-2">
                      <span className="w-[15px] h-[15px] rounded-sm border-2 border-sky-400 bg-sky-400 bg-opacity-50"></span>
                      <Text className={"font-medium"}>Income</Text>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <span className="w-[15px] h-[15px] rounded-sm border-2 border-rose-400 bg-rose-400 bg-opacity-50"></span>
                      <Text className={"font-medium"}>Expense</Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text className={"font-base !text-xs"}>
                (+20% Income | +14% Expense) than last year
              </Text>
              <div className="mt-4">
                <Suspense fallback="Loading data ...">
                  <LazyBarChart value={BarValue} />
                </Suspense>
              </div>
            </div>
            <div className="bg-white w-full h-auto rounded-md shadow-sm px-5 py-6 my-4">
              <TitleHeader
                title={"Recent Activity"}
                hasSubtitle={!1}
                isEmpty={data.length ? !1 : !0}
              />
              {data.length ? (
                <MiniTable data={data} />
              ) : (
                <EmptyState
                  image={Images.EmptyState}
                  message={"No recent activity"}
                />
              )}
            </div>
          </div>
          <div className="bg-white w-[50%] h-full rounded-md shadow-sm px-5 py-6">
            <TitleHeader
              title={"Available Donors"}
              hasSubtitle={donors.length ? !0 : !1}
              isEmpty={donors.length ? !1 : !0}
              subtitle={`You have ${donors.length} available donors.`}
            />
            {donors.length ? (
              <DonorTable data={donors} />
            ) : (
              <EmptyState
                image={Images.EmptyState}
                message={"No available donor's"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
