import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../shared/Title/SectionTitle";

const MyCarts = () => {
  const { carts, refetch } = useCart();
  // total price get in array of object using to reduce
  const total = carts.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    console.log(item);
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
        }
      });
  };
  return (
    <div className="h-auto ">
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
                {carts.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{item.name}</div>
                    </td>
                    <td>
                      <div className="text-sm opacity-50">{item.price}</div>
                    </td>

                    <td>
                      <div>
                        <button
                          className="btn btn-xs"
                          onClick={() => handleDelete(item)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
