import { Helmet } from "react-helmet";
import Banner from "../Banner";
import FeatureOrder from "../FeatureOrder/FeatureOrder";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro || Home</title>
      </Helmet>
      <Banner />
      <FeatureOrder />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
