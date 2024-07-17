import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/features/tokenSlice";

export const useEditTask = (onSuccess: any, onError: any) => {
  const token = useSelector(selectToken);

  const url = async (body: EditTaskValues): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_EDIT_TASK}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`${await response.text()}`);
      }

      return response.json();
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  };
  return useMutation({
    mutationFn: url,
    onSuccess,
    onError,
  });
};
