import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useCart from "../../../hooks/useCart";
const Header = () => {
  const { carts } = useCart();
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">
          Food Order{" "}
          <AiOutlineShoppingCart className="text-orange-400 font-bold "></AiOutlineShoppingCart>
        </Link>
      </li>
      <li>
        {user ? (
          <div>
            <Link to="/dashboard/cart">
              {" "}
              <button className="btn gap-2">
                Cart
                <div className="badge badge-secondary">
                  +{carts?.length || 0}
                </div>
              </button>
            </Link>
            <button onClick={handleLogout} className="btn btn-sm btn-primary">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-2xl fixed  left-0 top-0 right-0 text-white z-50">
      <div className="navbar main-container ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <img
              className="rounded-full"
              src={user?.photoURL}
              width={50}
              height={50}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
