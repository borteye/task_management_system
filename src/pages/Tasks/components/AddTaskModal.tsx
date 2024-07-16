import React, { FC } from "react";
import BackDrop from "../../../shared/components/BackDrop";
import InputField from "./InputField";
import Button from "./Button";
import SelectionModal from "./SelectionModal";

interface AddTaskModelProps {
  close: () => void;
  isAddTaskVisible: boolean;
}

const AddTaskModal: FC<AddTaskModelProps> = ({ close, isAddTaskVisible }) => {
  return (
    <>
      {isAddTaskVisible && <BackDrop close={close} />}
      <div
        className={` ${
          isAddTaskVisible ? "block" : "hidden"
        } absolute left-0 right-0 bottom-0 top-20 flex flex-col p-6 font-poppins-regular  justify-center z-custom-1000 h-fit w-custom-90% max-w-custom-600 mx-auto bg-white rounded-md`}
      >
        <h1 className="text-xl font-poppins-medium">Add Task</h1>

        <form className="flex flex-col gap-y-8">
          <InputField label="Task Title" rounded="sm" type="text" />
          <SelectionModal label="Assign Task To:" rounded="sm" />
          <div className="sm:flex w-full gap-x-6 justify-between">
            <SelectionModal label="Task Stage" width="4/5" rounded="sm" />
            <InputField
              label="Task Date"
              width="4/5"
              type="date"
              rounded="sm"
            />
          </div>
          <div className="sm:flex w-full gap-x-6 justify-between">
            <SelectionModal label="Priority Level" width="4/5" rounded="sm" />
            <InputField label="Due Date" width="4/5" type="date" rounded="sm" />
          </div>
          <div className="flex justify-end gap-x-8">
            <Button label="Cancel" background={false} onClick={close} />
            <Button label="Submit" background={true} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTaskModal;
