import Item from './Item';

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

  const sortedCategoryItems = categoryItems.sort((a, b) => {
    if (a.fields.isClaimed && !b.fields.isClaimed) return 1;
    if (!a.fields.isClaimed && b.fields.isClaimed) return -1;
    return a.fields.title.toLowerCase().localeCompare(b.fields.title.toLowerCase());
  });

  return (
    <section className="category mb-2 p-3 rounded">
      <h3 className="text-lg font-extrabold uppercase mb-2">{currentCategory.fields.title}</h3>
      <ul>
        {sortedCategoryItems.map(categoryItem => (
          <Item key={categoryItem.sys.id} currentItem={categoryItem} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
