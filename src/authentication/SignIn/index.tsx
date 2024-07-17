import signIn from "../../assets/images/SignIn.png";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import { signInSchema } from "../../shared/validators/authSchema";
import { useDispatch } from "react-redux";
import { SignInError, SignInSuccess } from "../../shared/types/apiResponse";
import { SET_TOKEN } from "../../redux/features/tokenSlice";
import { toast } from "sonner";
import { useSignIn } from "../hooks/useSignIn";
import LoadingOverlay from "../../shared/components/LoadingOverlay";
import Loader from "../../shared/components/Loader";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../../redux/features/userSlice";

type Props = {};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const onSuccess = (successData: SignInSuccess) => {
    const { success, data } = successData;

    if (!success) return;

    dispatch(SET_TOKEN({ token: data.token }));
    dispatch(
      SET_USER({
        userid: data.user.userid,
        username: data.user.username,
        email: data.user.email,
        profile: data.user.profile,
      })
    );

    toast.success(data.message, {
      position: "top-right",
    });

    navigate("/dashboard");
  };

  const onError = (errorData: Error) => {
    const object: SignInError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.errorMessage} 🙊`, {
      position: "top-right",
    });
  };

  const { mutate, isPending } = useSignIn(onSuccess, onError);

  const initialValues = {
    email: "",
    password: "",
  };

  const OnSubmit = (values: SignInValues) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    mutate(body);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <div className="py-4 sm:py-8 font-poppins-regular flex flex-col md:flex-row sm:h-screen md:items-center justify-center gap-4">
      {isPending && (
        <LoadingOverlay>
          <Loader />
        </LoadingOverlay>
      )}
      <section className="flex items-center md:w-2/4 lg:w-2/5 ">
        <img src={signIn} alt="sign_in illustration" />
      </section>
      <section className="px-4 sm:px-10 md:2/4 flex flex-col gap-y-6">
        <p className="font-poppins-semibold text-3xl mb-6">
          Hello, <br /> Welcome Back!{" "}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          <>
            <InputField
              type="email"
              placeholder="Email"
              icon={<EnvelopeIcon className="size-7" />}
              value={values.email}
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.email}
              errors={errors.email}
            />
            {errors.email && touched.email ? (
              <div className="text-wine text-sm -mt-6">{errors.email}</div>
            ) : (
              false
            )}
          </>

          <>
            <InputField
              type="password"
              placeholder="Password"
              icon={<LockClosedIcon className="size-7" />}
              value={values.password}
              name="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.password}
              errors={errors.password}
            />
            {errors.password && touched.password ? (
              <div className="text-wine text-sm -mt-6 min-w-custom-428 md:w-custom-370">
                {errors.password}
              </div>
            ) : (
              false
            )}
          </>

          <p
            onClick={navigateToForgotPassword}
            className="font-poppins-regular text-right cursor-pointer"
          >
            Forgot Password?
          </p>
          <Button label="Sign In" />
        </form>
        <p className="font-poppins-regular text-center cursor-pointer">
          Don't have an account?{" "}
          <span
            onClick={navigateToSignUp}
            className="font-poppins-semibold text-primary_color"
          >
            Sign Up
          </span>
        </p>
      </section>
    </div>
  );
};

export default SignIn;
