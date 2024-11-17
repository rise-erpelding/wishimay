import Item from './Item';
import './css/Category.css';

const Category = ({ currentWishList, currentCategory, items }) => {
  const currentWishListId = currentWishList.sys.id;
  const currentCategoryId = currentCategory.sys.id;
  const categoryItems = items.filter(item => (
    item.fields.category.some(category => (
      category.sys.id === currentCategoryId)) &&
      item.fields.wishList.some(wishList => (
        wishList.sys.id === currentWishListId
      ))
    ));

  return (
    <section className="category mb-2 p-3 rounded">
      <h3 className="text-lg font-semibold mb-2">{currentCategory.fields.title}</h3>
      <ul>
        {categoryItems.map(categoryItem => (
          <Item key={categoryItem.sys.id} currentItem={categoryItem} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
