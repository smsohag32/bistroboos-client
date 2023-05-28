import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../shared/Title/SectionTitle";

const MyCarts = () => {
  const { carts } = useCart();
  // total price get in array of object using to reduce
  const total = carts.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro || Home</title>
      </Helmet>
      <div>
        <SectionTitle
          heading={"My Carts"}
          subHeading={"Getting start to buy"}
        ></SectionTitle>
        <div className="uppercase flex px-12 justify-evenly font-semibold gap-6 ">
          <h3 className="text-xl">Total Items: {carts.length}</h3>
          <h3 className="text-xl">Total price: $ {total}</h3>
          <button className="btn btn-sm">Pay</button>
        </div>
        <div className="md:px-12 sm:px-5 mt-5 ">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
