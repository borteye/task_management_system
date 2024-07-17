import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/features/tokenSlice";

export const useMarkAsCompleted = (onSuccess: any, onError: any) => {
  const token = useSelector(selectToken);

  const url = async (body: MarkAsCompleteValues): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_MARK_AS_COMPLETED}`,
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
