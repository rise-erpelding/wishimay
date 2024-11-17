import './css/Item.css';

const Item = ({ currentItem }) => {
  return (
    <li className="p-4 item mb-2 rounded-lg">
      {currentItem.fields.title}
    </li>
  );
};

export default Item;
