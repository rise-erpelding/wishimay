import Category from './Category';

const WishList = ({ items }) => {
  const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");

  return (
    <section>
      <h2>Wish list name (name of person)</h2>
      <ul>
        <Category items={items}/>
      </ul>
    </section>
  );
};

export default WishList;
