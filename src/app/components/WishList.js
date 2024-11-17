import Category from './Category';
import './css/WishList.css';

const WishList = ({ currentWishList, categories, items }) => {
  const currentWishListId = currentWishList.sys.id;
  const wishListCategories = categories.filter(category => 
    category.fields.wishList.some(wishListItem => wishListItem.sys.id === currentWishListId)
  );

  return (
    <section className="wish-list mb-8 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">{currentWishList.fields.title}</h2>
      <div>
        {wishListCategories.map(wishListCategory => (
          <Category key={wishListCategory.sys.id} currentWishList={currentWishList} currentCategory={wishListCategory} items={items} />
        ))}
      </div>
    </section>
  );
};

export default WishList;
