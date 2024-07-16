import CodeInputField from "../components/CodeInputField";
import Button from "../components/Button";
import { useInputRefs } from "../hooks/useInputRefs";
import { useFormik } from "formik";
import { emailVerificationSchema } from "../../shared/validators/authSchema";
import { EmailVerificationValues } from "../../shared/types/auth";
import {
  EmailVerificationError,
  EmailVerificationSuccess,
} from "../../shared/types/apiResponse";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEmailVerification } from "../hooks/useEmailVerification";
import { useResendCode } from "../hooks/useResendCode";
import LoadingOverlay from "../../shared/components/LoadingOverlay";
import Loader from "../../shared/components/Loader";

const EmailVerification = () => {
  const { inputRefs, handleNext } = useInputRefs();
  const navigate = useNavigate();

  const onSuccess = (successData: EmailVerificationSuccess) => {
    const { data, success } = successData;

    if (!success) return;

    toast.success(data.message, {
      position: "top-right",
    });

    navigate("/reset-password");
  };

  const onError = (errorData: Error) => {
    const object: EmailVerificationError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.errorMessage || object.message || object.error} 🙊`, {
      position: "top-right",
    });

    object.message && navigate("/forgot-password");
  };

  const { mutate, isPending } = useEmailVerification(onSuccess, onError);

  const { mutate: resendCode, isPending: resendCodePending } = useResendCode();

  const initialValues = {
    codeDigitOne: "",
    codeDigitTwo: "",
    codeDigitThree: "",
    codeDigitFour: "",
  };

  const OnSubmit = (values: EmailVerificationValues) => {
    const body = {
      verificationCode: `${values.codeDigitOne}${values.codeDigitTwo}${values.codeDigitThree}${values.codeDigitFour}`,
    };
    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: emailVerificationSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <div className="h-screen md:bg-primary_color flex flex-col items-center justify-center">
      {(isPending || resendCodePending) && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <section className="px-4 sm:px-10 flex flex-col gap-y-10 md:bg-white md:h-fit md:w-fit p-10 md:rounded-custom-35">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-poppins-medium text-2xl text-center">
            Email Verification
          </h1>
          <p className="font-poppins-regular text-center sm:w-custom-428">
            An email with verification code was just sent to your email address
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 w-full">
          <div className="flex justify-center gap-x-6">
            <CodeInputField
              name="codeDigitOne"
              handleNext={handleNext}
              ref={inputRefs.codeDigitOne}
              value={values.codeDigitOne}
              handleChange={handleChange}
            />
            <CodeInputField
              name="codeDigitTwo"
              handleNext={handleNext}
              ref={inputRefs.codeDigitTwo}
              value={values.codeDigitTwo}
              handleChange={handleChange}
            />
            <CodeInputField
              name="codeDigitThree"
              handleNext={handleNext}
              ref={inputRefs.codeDigitThree}
              value={values.codeDigitThree}
              handleChange={handleChange}
            />
            <CodeInputField
              name="codeDigitFour"
              handleNext={handleNext}
              ref={inputRefs.codeDigitFour}
              value={values.codeDigitFour}
              handleChange={handleChange}
            />
          </div>
          <Button label="Verify" />
        </form>
        <p className="font-poppins-regular text-center">
          Are you facing any problems with receiving the code?
        </p>
        <p
          onClick={() => resendCode()}
          className="font-poppins-medium text-xl text-center cursor-pointer"
        >
          Resend code
        </p>
      </section>
    </div>
  );
};

export default EmailVerification;
