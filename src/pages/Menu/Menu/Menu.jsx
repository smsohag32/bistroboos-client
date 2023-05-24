import menuImage from "../../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SectionTitle from "../../shared/Title/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soup = menu.filter((items) => items.category === "soup");
  const salad = menu.filter((items) => items.category === "salad");
  const offered = menu.filter((items) => items.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover
        image={menuImage}
        title="Our Menu"
        subTitle="Would you like to dish?"
      />
      <SectionTitle
        heading={"Todays offered"}
        subHeading={"don't miss"}
      ></SectionTitle>
      <CategoryMenu items={offered}></CategoryMenu>
      <CategoryMenu
        items={dessert}
        title={"Dessert"}
        img={dessertImage}
      ></CategoryMenu>
      <CategoryMenu items={soup} title={"Soups"} img={soupImage}></CategoryMenu>
      <CategoryMenu
        items={salad}
        title={"Salad"}
        img={saladImage}
      ></CategoryMenu>
      <CategoryMenu
        items={pizza}
        title={"Pizza"}
        img={pizzaImage}
      ></CategoryMenu>
    </div>
  );
};

export default Menu;
