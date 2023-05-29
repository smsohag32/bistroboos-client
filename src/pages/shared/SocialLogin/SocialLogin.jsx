import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathName || "/";
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
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
            navigate(from, { replace: true });
          }
        });
    });
  };
  return (
    <div className="">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full  mb-5 btn-square btn-outline"
      >
        Continue with google
      </button>
    </div>
  );
};

export default SocialLogin;
