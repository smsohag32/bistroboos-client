import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathName || "/login";
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const imageFile = data.image[0];
    const password = data.password;
    let formData = new FormData();
    formData.append("image", imageFile);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        createUser(email, password)
          .then((result) => {
            toast.success("Register successfully");
            updateUserInfo(name, imageUrl)
              .then(() => {
                const saveUser = { name: name, email: email };
                fetch(`http://localhost:5000/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      toast.success("sing up successfully");
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => console.log(err.message));
      });
    // console.log(dataForm);
  };

  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "This Field is required",
                })}
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
              {errors.email && (
                <p>
                  <small className="text-red-600">
                    {errors?.name?.message}
                  </small>
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Photo</span>
              </label>
              <input
                {...register("image", {
                  required: "This Field is required",
                })}
                type="file"
                placeholder="photo"
                name="image"
                accept="image/*"
                className="input input-bordered"
              />
              {errors.image && (
                <p>
                  <small className="text-red-600">
                    {errors?.email?.message}
                  </small>
                </p>
              )}
            </div>
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

            <div className="form-control mt-6">
              <button className="btn btn-outline disabled:text-black disabled:border-none btn-primary">
                Register
              </button>
            </div>
          </form>
          <p>
            Al ready have an account <Link to="/login">Login Please</Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
