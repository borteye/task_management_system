import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useResendCodeHandler } from "./useResendCodeHandler";
import { selectToken } from "../../redux/features/tokenSlice";

export const useResendCode = () => {
  const { onSuccess, onError } = useResendCodeHandler();
  const token = useSelector(selectToken);

  const url = async (): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_RESEND_VERIFICATION_CODE}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
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
