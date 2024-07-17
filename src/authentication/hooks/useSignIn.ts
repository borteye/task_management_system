import { useMutation } from "@tanstack/react-query";

export const useSignIn = (onSuccess: any, onError: any) => {
  const url = async (body: SignInValues): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_SIGN_IN_URL}`,
        {
          headers: {
            "Content-Type": "application/json",
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
