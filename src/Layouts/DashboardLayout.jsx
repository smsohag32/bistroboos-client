import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
const DashboardLayout = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">
          <AiFillHome
            className="text-3xl h-10 text-red-400 font-medium"
            size="2em"
          />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservation">
          <AiFillHome
            className="text-3xl h-10 text-red-400 font-medium"
            size="2em"
          />
          Reservation
        </NavLink>
      </li>
      <li>
        <NavLink to="/paymenthistory">
          <AiFillHome
            className="text-3xl h-10 text-red-400 font-medium"
            size="2em"
          />
          Payment History
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/carts">
          <AiFillShopping />
          My Carts
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-white w-full h-auto">
            <div className=" absolute right-5">
              <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                <FaAddressBook
                  className="text-5xl w-10 h-10 fa-4x"
                  style={{ size: "3rem" }}
                />
              </label>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {navLink}
            <div className="divider "></div>
            <li>
              <NavLink to="/">
                <AiFillHome
                  className="text-3xl h-10 text-red-400 font-medium"
                  size="2em"
                />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <AiFillHome
                  className="text-3xl h-10 text-red-400 font-medium"
                  size="2em"
                />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <AiFillHome
                  className="text-3xl h-10 text-red-400 font-medium"
                  size="2em"
                />
                Order
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
