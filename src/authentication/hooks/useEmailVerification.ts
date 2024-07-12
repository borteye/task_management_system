import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { EmailVerificationCode } from "../../shared/types/auth";
import { selectToken } from "../../redux/features/tokenSlice";

export const useEmailVerification = (onSuccess: any, onError: any) => {
  const token = useSelector(selectToken);

  const url = async (body: EmailVerificationCode): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_EMAIL_VERIFICATION}`,
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
