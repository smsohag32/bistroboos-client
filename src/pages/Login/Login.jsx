import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathName || "/";
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const captchaInput = useRef();
  const [disable, setDisable] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const handleValideCaptcha = () => {
    const user_captcha_value = captchaInput.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
      toast.success("validate successfully");
      setIsValid(true);
    } else {
      setDisable(true);
      setIsValid(false);
    }
  };
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "This Field is required",
                })}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p>
                  <small className="text-red-600">
                    {errors?.email?.message}
                  </small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "This field is required",
                })}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p>
                  <small className="text-red-600">
                    {errors?.password?.message}
                  </small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaInput}
                placeholder="Enter captcha above"
                className="input input-bordered"
              />
              <label className="label">
                <button onClick={handleValideCaptcha} className="btn btn-xs">
                  Validate
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disable}
                className="btn btn-outline disabled:text-black disabled:border-none btn-primary"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-black">
            Do not have any account <Link to="/register">Please Sing up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
