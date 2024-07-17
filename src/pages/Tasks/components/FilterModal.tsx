import React, { FC } from "react";
import BackDrop from "../../../shared/components/BackDrop";
import CheckboxInput from "./CheckboxInput";
import { BACKDROP_WHITE_BG } from "../../../shared/components/constants";

interface FilterModalProps {
  close: () => void;
  isFilterVisible: boolean;
}

const FilterModal: FC<FilterModalProps> = ({ close, isFilterVisible }) => {
  return (
    <>
      {isFilterVisible && (
        <BackDrop close={close} backgroundColor={BACKDROP_WHITE_BG} />
      )}
      <div
        className={`${
          isFilterVisible ? "block" : "hidden"
        } absolute flex flex-col gap-y-6 p-4 top-10 sm:top-12  bg-white rounded border shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] z-custom-1000`}
      >
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
      </div>
    </>
  );
};

export default FilterModal;
