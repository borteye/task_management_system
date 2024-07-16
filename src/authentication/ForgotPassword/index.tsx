import forgotPassword from "../../assets/images/ForgotPassword.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../shared/validators/authSchema";
import { ForgotPasswordValues } from "../../shared/types/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ForgotPasswordError,
  ForgotPasswordSuccess,
} from "../../shared/types/apiResponse";
import { SET_TOKEN } from "../../redux/features/tokenSlice";
import { toast } from "sonner";
import { useForgotPassword } from "../hooks/useForgotPassword";
import LoadingOverlay from "../../shared/components/LoadingOverlay";
import Loader from "../../shared/components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSignIn = () => {
    navigate("/");
  };
  const onSuccess = (successData: ForgotPasswordSuccess) => {
    const { data, success } = successData;

    if (!success) return;

    dispatch(SET_TOKEN({ token: data?.token }));

    toast.success(data.message, {
      position: "top-right",
    });

    navigate("/email-verification");
  };

  const onError = (errorData: Error) => {
    const object: ForgotPasswordError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.errorMessage} 🙊`, {
      position: "top-right",
    });
  };

  const { mutate, isPending } = useForgotPassword(onSuccess, onError);

  const initialValues = {
    email: "",
  };

  const OnSubmit = (values: ForgotPasswordValues) => {
    const body = {
      email: values.email,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <div className="sm:h-screen font-poppins-regular  md:bg-primary_color flex flex-col items-center justify-center">
      {isPending && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <section className="sm:hidden">
        <img src={forgotPassword} alt="forgot_password illustration" />
      </section>
      <section className="px-4 sm:px-10 flex flex-col gap-y-10 md:bg-white md:h-fit md:w-fit p-10 md:rounded-custom-35">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-poppins-medium text-2xl text-center">
            Forgot your password?
          </h1>
          <p className="font-poppins-regular text-center sm:w-custom-428">
            Enter your email address and we’ll send you a code to reset password
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <label>Email</label>
            <>
              <InputField
                placeholder="Enter your email"
                type="email"
                name="email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.email}
                errors={errors.email}
              />
              {errors.email && touched.email ? (
                <div className="text-wine text-sm -mt-2">{errors.email}</div>
              ) : (
                false
              )}
            </>
          </div>
          <Button label="Send Instructions" />
        </form>
        <p
          onClick={navigateToSignIn}
          className="font-poppins-semibold text-center cursor-pointer mt-6"
        >
          Back to sign-in page
        </p>
      </section>
    </div>
  );
};

export default ForgotPassword;
