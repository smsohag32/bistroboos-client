import SectionTitle from "../../shared/Title/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((items) => items.category === "popular");

  return (
    <section className=" main-container">
      <SectionTitle
        heading="Popular items"
        subHeading="On our menu"
      ></SectionTitle>
      <div className="grid py-10 md:grid-cols-2 gap-2">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
