import MenuHeading from "../../shared/MenuHeading/MenuHeading";
import menuImage from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <MenuHeading
        image={menuImage}
        title="Our Menu"
        subTitle="Would you like to dish?"
      />
    </div>
  );
};

export default Menu;
