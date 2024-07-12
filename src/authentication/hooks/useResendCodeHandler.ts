import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import {
  ResendCodeError,
  ResendCodeSuccess,
} from "../../shared/types/apiResponse";

export const useResendCodeHandler = () => {
  const navigate = useNavigate();

  const onSuccess = (successData: ResendCodeSuccess) => {
    const { data, success } = successData;

    if (!success) return;

    toast.success(data.message, {
      position: "top-right",
    });
  };

  const onError = (errorData: Error) => {
    const object: ResendCodeError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.errorMessage || object.message || object.error} 🙊`, {
      position: "top-right",
    });

    object.message && navigate("/forgot-password");
  };

  return { onSuccess, onError };
};
