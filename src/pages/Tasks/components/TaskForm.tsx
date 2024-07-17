import React, { FC } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import BackDrop from "../../../shared/components/BackDrop";
import InputField from "./InputField";
import Button from "./Button";
import SelectionModal from "./SelectionModal";
import TextArea from "./TextArea";
import LoadingOverlay from "../../../shared/components/LoadingOverlay";
import Loader from "../../../shared/components/Loader";
import currentDate from "../../../shared/utils/currentDate";
import { PriorityLevel, TaskStage } from "../../../shared/components/constants";
import { TaskFormSchema } from "../../../shared/validators/formsSchema";
import { selectAllUsers } from "../../../redux/features/allUsersSlice";
import { CLEAR_EDIT_TASK } from "../../../redux/features/editTaskSlice";
import { formatDate } from "../../../shared/utils/dateFormatter";

interface TaskFormProps {
  initialValues: TaskValues;
  onSubmit: (values: any) => void;
  close: () => void;
  isVisible: boolean;
  isPending?: boolean;
  title: string;
}

const TaskForm: FC<TaskFormProps> = ({
  initialValues,
  onSubmit,
  close,
  isVisible,
  isPending,
  title,
}) => {
  const date = currentDate();
  const dispatch = useDispatch();
  const getAllUsers = useSelector(selectAllUsers);
  const allUsers = getAllUsers?.map((user) => user.username);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: TaskFormSchema,
    onSubmit: onSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  const handleClose = () => {
    dispatch(CLEAR_EDIT_TASK());
    close();
  };

  return (
    <>
      {isVisible && <BackDrop close={handleClose} />}
      {isPending && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <div
        className={` ${
          isVisible ? "block" : "hidden"
        } absolute left-0 right-0 bottom-0 top-20 flex flex-col p-6 font-poppins-regular justify-center z-custom-1000 h-fit w-custom-90% max-w-custom-600 mx-auto bg-white rounded-md`}
      >
        <h1 className="text-xl font-poppins-medium">{title}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          <InputField
            label="Task Title"
            rounded="sm"
            type="text"
            name="title"
            value={values.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.title && touched.title && (
            <div className="text-wine text-sm -mt-6">{errors.title}</div>
          )}
          <TextArea
            label="Description"
            name="description"
            value={values.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <div className="text-wine text-sm -mt-6">{errors.description}</div>
          )}
          <SelectionModal
            label="Assign Task To:"
            options={allUsers}
            rounded="sm"
            name="assigned_to"
            value={values.assigned_to}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.assigned_to && touched.assigned_to && (
            <div className="text-wine text-sm -mt-6">{errors.assigned_to}</div>
          )}
          <div className="sm:flex w-full gap-x-6 justify-between">
            <div className="flex flex-1 flex-col gap-y-6">
              <SelectionModal
                label="Task Stage"
                options={TaskStage}
                width="4/5"
                rounded="sm"
                name="stage"
                value={values.stage}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.stage && touched.stage && (
                <div className="text-wine text-sm -mt-6">{errors.stage}</div>
              )}
            </div>
            <InputField
              label="Task Date"
              value={date}
              width="4/5"
              disabled={true}
              rounded="sm"
            />
          </div>
          <div className="sm:flex w-full gap-x-6 justify-between">
            <div className="flex flex-1 flex-col gap-y-6">
              <SelectionModal
                label="Priority Level"
                options={PriorityLevel}
                width="4/5"
                rounded="sm"
                name="priority_level"
                value={values.priority_level}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.priority_level && touched.priority_level && (
                <div className="text-wine text-sm -mt-6">
                  {errors.priority_level}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <InputField
                label="Due Date"
                width="4/5"
                type="date"
                rounded="sm"
                name="due_date"
                value={values.due_date}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.due_date && touched.due_date && (
                <div className="text-wine text-sm -mt-6">{errors.due_date}</div>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-x-8">
            <Button
              label="Cancel"
              background={false}
              type="button"
              onClick={handleClose}
            />
            <Button label="Submit" background={true} type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
