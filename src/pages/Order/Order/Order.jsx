import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import orderImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const categoryItems = [
    "offered",
    "salad",
    "pizza",
    "soup",
    "desserts",
    "drinks",
  ];
  const { category } = useParams();
  const categoryIndex = categoryItems.indexOf(category);
  const [tabIndex, setTAbIndex] = useState(categoryIndex);
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soup = menu.filter((items) => items.category === "soup");
  const salad = menu.filter((items) => items.category === "salad");
  const offered = menu.filter((items) => items.category === "offered");
  const drinks = menu.filter((items) => items.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro || Food Order</title>
      </Helmet>
      <Cover
        title={"Order now"}
        image={orderImage}
        subTitle={"Would you like to dish"}
      ></Cover>
      {/* react tab */}
      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTAbIndex(index)}>
          <TabList className="text-center my-5 ">
            <Tab>Offered</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          {/* tab panel */}
          <TabPanel>
            <OrderTab items={offered}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
