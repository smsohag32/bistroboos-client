import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const CategoryMenu = ({ items, title, img }) => {
  return (
    <div className="py-6">
      {title && <Cover title={title} image={img}></Cover>}
      <div className="grid py-10 md:grid-cols-2 gap-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
