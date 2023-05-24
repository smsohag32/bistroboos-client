import { useEffect, useState } from "react";
import SectionTitle from "../../shared/Title/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section className=" main-container">
      <SectionTitle
        heading="Popular items"
        subHeading="On our menu"
      ></SectionTitle>
      <div className="grid py-10 md:grid-cols-2 gap-2">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
