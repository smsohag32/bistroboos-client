import MenuHeading from "../../shared/MenuHeading/MenuHeading";
import menuImage from "../../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <MenuHeading
        image={menuImage}
        title="Our Menu"
        subTitle="Would you like to dish?"
      />
    </div>
  );
};

export default Menu;
