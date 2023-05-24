import Banner from "../Banner";
import FeatureOrder from "../FeatureOrder/FeatureOrder";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureOrder />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
