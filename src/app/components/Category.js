import Item from './Item';
import './css/Category.css';

const Category = ({ items }) => {
  // const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");

  return (
    <li className="category mb-2 p-3 rounded">
      <h3 className="text-lg font-semibold mb-2">Category title</h3>
      <Item items={items} />
      <Item items={items} />
    </li>
  );
};

export default Category;
