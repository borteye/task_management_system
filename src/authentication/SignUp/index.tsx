import signUp from "../../assets/images/SignUp.png";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import { signUpSchema } from "../../shared/validators/authSchema";
import { SignUpValues } from "../../shared/types/auth";
import { SignUpError, SignUpSuccess } from "../../shared/types/apiResponse";
import { toast } from "sonner";
import { useSignUp } from "../hooks/useSignUp";
import BackDrop from "../../shared/components/BackDrop";
import Loader from "../../shared/components/Loader";
import { useNavigate } from "react-router-dom";
type Props = {};

const SignUp = () => {
  const navigate = useNavigate()

  const navigateToSignIn = () => {
    navigate("/");
  };

  const onSuccess = (successData: SignUpSuccess) => {
    const { success, data } = successData;

    if (!success) return;

    toast.success(data.message, {
      position: "top-right",
    });

  
  };

  const onError = (errorData: Error) => {
    const object: SignUpError = JSON.parse(errorData.message);

    if (object.success) return;

    toast.error(`${object.error} 🙊`, {
      position: "top-right",
    });
  };

  const { mutate, isPending } = useSignUp(onSuccess, onError);


  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const OnSubmit = (values: SignUpValues) => {
    const body = {
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    mutate(body);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: OnSubmit,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;
  return (
    <div className="py-4 sm:py-8  font-poppins-regular flex flex-col md:flex-row-reverse sm:h-screen md:items-center justify-center gap-4">
      {isPending && (
        <BackDrop>
          <Loader />
        </BackDrop>
      )}
      <section className="flex items-center md:w-2/4 lg:w-2/5 ">
        <img src={signUp} alt="sign_up illustration" />
      </section>
      <section className="px-4 sm:px-10 md:2/4 flex flex-col gap-y-6">
        <p className="font-poppins-semibold text-3xl mb-6">
          Create your account
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          <>
            <InputField
              type="text"
              placeholder="Username"
              icon={<UserIcon className="size-7" />}
              value={values.username}
              name="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.username}
              errors={errors.username}
            />
            {errors.username && touched.username ? (
              <div className="text-error text-sm -mt-6">{errors.username}</div>
            ) : (
              false
            )}
          </>

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
              <div className="text-error text-sm -mt-6">{errors.email}</div>
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
              <div className="text-error text-sm -mt-6 min-w-custom-428 md:w-custom-370">
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
              icon={<LockClosedIcon className="size-7" />}
              value={values.confirmPassword}
              name="confirmPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.confirmPassword}
              errors={errors.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="text-error text-sm -mt-6">
                {errors.confirmPassword}
              </div>
            ) : (
              false
            )}
          </>

          <Button label="Sign Up" />
        </form>
        <p className="font-poppins-regular text-center cursor-pointer">
          Already have an account?{" "}
          <span onClick={navigateToSignIn} className="font-poppins-semibold text-primary_color">
            Sign In
          </span>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
