import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/features/tokenSlice";
import { selectUserId, selectUsername } from "../../redux/features/userSlice";
import { GetTasks } from "../types/apiResponse";

export const useTasks = () => {
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const username = useSelector(selectUsername);
  const url = async (): Promise<GetTasks> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_TASKS_URL}/${userId}/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
  return useQuery({
    queryKey: ["tasks"],
    queryFn: url,
    staleTime: Infinity,
  });
};
