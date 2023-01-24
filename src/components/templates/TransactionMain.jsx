import React from "react";
import {
  ArrowSendOut,
  PlusOutline,
  Send,
  Settings,
  XMark,
} from "../atoms/Icons";
import Text from "../atoms/Text";
import EmptyState from "../molecules/EmptyState";
import SearchBar from "../molecules/SearchBar";
import RequestTableRow from "../organisms/RequestTableRow";
import { Transacts, listItems } from "./../../utils/DemoConst";
import TransactionData from "./../organisms/TransactionData";
import TopBar from "./../molecules/TopBar";
import Heading from "./../atoms/Heading";
import Select from "./../molecules/Select";

const TransactionMain = () => {
  return (
    <div className="w-full h-auto  overflow-auto bg-zinc-100">
      {/* topbar */}
      <TopBar />

      <div className="px-5 py-10">
        <div className="flex justify-between  px-2">
          <Heading level={2} className="font-bold my-2">
            Transactions
          </Heading>
          <span className="flex items-center gap-5">
            <SearchBar />
            <Select items={listItems} />
            <Settings className={'w-[24px] text-zinc-400'} />
          </span>
        </div>

        {/* request table  */}
        <div className="w-full bg-white rounded-t-md my-5">
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
  );
};

export default TransactionMain;
