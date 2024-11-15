import Category from './Category';
import './css/WishList.css';

const WishList = ({ items }) => {
  const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");

  return (
    <section className="wish-list mb-8 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Wish list name (name of person)</h2>
      <ul>
        <Category items={items}/>
        <Category items={items}/>
      </ul>
    </section>
  );
};

export default WishList;
