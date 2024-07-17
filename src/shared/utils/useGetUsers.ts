import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/features/tokenSlice";

export const useGetUsers = () => {
  const token = useSelector(selectToken);

  const url = async (): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_GET_USER}`,
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
    queryKey: ["get-users"],
    queryFn: url,
    staleTime: Infinity,
  });
};
