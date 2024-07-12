import { useMutation } from "@tanstack/react-query";
import { selectToken } from "../../redux/features/tokenSlice";
import { useSelector } from "react-redux";
import { ResetPasswordValues } from "../../shared/types/auth";

export const useResetPassword = (onSuccess: any, onError: any) => {
  const token = useSelector(selectToken);

  const url = async (body: ResetPasswordValues): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_RESET_PASSWORD}`,
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
