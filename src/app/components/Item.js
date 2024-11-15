import './css/Item.css';

const Item = ({ items }) => {
  // const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");

  return (
    <li className="p-4 item mb-2 rounded-lg">
      Item name
    </li>
  );
};

export default Item;
