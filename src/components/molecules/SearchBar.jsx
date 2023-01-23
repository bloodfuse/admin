import { useState } from "react";
import InputBox from "../atoms/InputBox";
import { Search } from "../atoms/Icons";

const SearchBar = () => {
  const [search, setSearch] = useState();
  return (
    <InputBox
      onChange={setSearch}
      className={"w-[350px] h-[40px] border-2 border-[#C4C4C4] "}
      isIcon={true}
      placeHolder={`Search for Reciepent`}
      Icon={<Search className="w-[24px]" />}
    />
  );
};

export default SearchBar;
