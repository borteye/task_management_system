import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/features/tokenSlice";
import { selectUserId } from "../../redux/features/userSlice";

export const useDeleteTask = (onSuccess: any, onError: any) => {
  const token = useSelector(selectToken);

  const url = async (taskId: number): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_DELETE_TASK}/${taskId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "DELETE",
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
