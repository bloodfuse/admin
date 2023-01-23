import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { PlaySolid, CheckedIcon } from "../atoms/Icons";
import Text from "../atoms/Text";

const Select = ({ items, parentClass='my-2 mx-1', className = "bg-white border-2 border-gray-400" }) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className={`relative ${parentClass}`}>
          <Listbox.Button
            className={`relative w-full cursor-default rounded-full ${className} py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm`}
          >
            <span className="block truncate">
              <Text className={"!text-sm font-medium"}>{selected.name}</Text>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <PlaySolid className="h-3 w-3 text-gray-600 rotate-90" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 -left-3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-red-100 text-[#DC2626]" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                          <CheckedIcon className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;
