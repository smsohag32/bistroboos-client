import MenuCard from "../../shared/MenuCard/MenuCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid py-10 main-container md:grid-cols-3 gap-12">
      {items.map((item) => (
        <MenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
