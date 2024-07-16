import { useFormik } from "formik";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { resetPasswordSchema } from "../../shared/validators/authSchema";
import { ResetPasswordValues } from "../../shared/types/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ResetPasswordError,
  ResetPasswordSuccess,
} from "../../shared/types/apiResponse";
import { toast } from "sonner";
import { CLEAR_TOKEN } from "../../redux/features/tokenSlice";
import { useResetPassword } from "../hooks/useResetPassword";
import LoadingOverlay from "../../shared/components/LoadingOverlay";
import Loader from "../../shared/components/Loader";

type Props = {};

const ResetPassword = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = (successData: ResetPasswordSuccess) => {
    const { data, success } = successData;

    if (!success) return;

    toast.success(data.message, {
      position: "top-right",
    });

    dispatch(CLEAR_TOKEN());

    navigate("/");
  };

  const onError = (errorData: Error) => {
    const object: ResetPasswordError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.errorMessage || object.message} 🙊`, {
      position: "top-right",
    });

    object.message && navigate("/forgot-password");
  };

  const { mutate, isPending } = useResetPassword(onSuccess, onError);

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const OnSubmit = (values: ResetPasswordValues) => {
    const body = {
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;
  return (
    <div className="h-screen md:bg-primary_color flex flex-col items-center justify-center">
      {isPending && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <section className="px-4 sm:px-10 flex flex-col gap-y-10 md:bg-white md:h-fit md:w-fit p-10 md:rounded-custom-35">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-poppins-medium text-2xl text-center">
            Reset your password
          </h1>
          <p className="font-poppins-regular text-center sm:w-custom-428">
            Welcome back! Please enter a new password below to regain access to
            your account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 w-full">
          <div className="flex flex-col gap-y-4">
            <>
              <InputField
                type="password"
                placeholder="New Password"
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.password}
                errors={errors.password}
              />
              {errors.password && touched.password ? (
                <div className="text-wine text-sm -mt-2 min-w-custom-428 md:w-custom-370">
                  {errors.password}
                </div>
              ) : (
                false
              )}
            </>
            <>
              <InputField
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.confirmPassword}
                errors={errors.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="text-wine text-sm -mt-2">
                  {errors.confirmPassword}
                </div>
              ) : (
                false
              )}
            </>
          </div>
          <Button label="Reset Password" />
        </form>
      </section>
    </div>
  );
};

export default ResetPassword;
