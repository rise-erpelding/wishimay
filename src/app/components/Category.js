"use client";
import { useState } from 'react';
import Item from './Item';
import { ChevronDown, ChevronUp } from './Icons';

const Category = ({ currentWishList, currentCategory, items }) => {
  const [isShowingCategory, setIsShowingCategory] = useState("true");
  const toggleShowCategory = () => setIsShowingCategory(!isShowingCategory);

  const currentWishListId = currentWishList.sys.id;
  const currentCategoryId = currentCategory.sys.id;
  const categoryItems = items.filter(item => (
    item.fields.category?.some(category => (
      category.sys.id === currentCategoryId)) &&
      item.fields.wishList.some(wishList => (
        wishList.sys.id === currentWishListId
      )) &&
      !item.fields.isStale // Exclude stale items
  ));

  const sortedCategoryItems = categoryItems.sort((a, b) => {
    if (a.fields.isClaimed && !b.fields.isClaimed) return 1;
    if (!a.fields.isClaimed && b.fields.isClaimed) return -1;
    return a.fields.title?.toLowerCase().localeCompare(b.fields.title?.toLowerCase());
  });

  return (
    <section className="category mb-2 p-3 rounded">
      <h3 className="text-lg font-extrabold uppercase mb-2">
        <button onClick={toggleShowCategory}>
          {currentCategory.fields.title}
          {isShowingCategory ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </h3>
      <ul className={isShowingCategory ? "is-open" : "is-closed"}>
        {sortedCategoryItems.map(categoryItem => (
          <Item key={categoryItem.sys.id} currentItem={categoryItem} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
