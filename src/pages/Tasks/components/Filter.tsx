import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FilterModal from "./FilterModal";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className="relative font-poppins-regular sm:w-1/4 flex items-center sm:justify-end ">
      <div
        onClick={toggleFilter}
        className="text-lg text-primary_color cursor-pointer font-poppins-medium flex items-center gap-x-2"
      >
        <p>Filter Tasks</p>
        {isFilterVisible ? (
          <ChevronDownIcon className="size-6" />
        ) : (
          <ChevronUpIcon className="size-6" />
        )}
      </div>
      <FilterModal close={toggleFilter} isFilterVisible={isFilterVisible} />
    </div>
  );
};

export default Filter;
