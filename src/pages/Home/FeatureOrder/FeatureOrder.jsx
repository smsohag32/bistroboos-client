import SectionTitle from "../../shared/Title/SectionTitle";
import OrderTab from "./OrderTab";

const FeatureOrder = () => {
  return (
    <div className="main-container py-10">
      <SectionTitle heading={"Order Online"} subHeading={"10am to 9pm"} />
      <div className="mt-10">
        <OrderTab />
      </div>
    </div>
  );
};

export default FeatureOrder;
