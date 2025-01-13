"use client";
import { useState } from 'react';
import Category from './Category';
import { ChevronDown, ChevronUp } from './Icons';

const WishList = ({ currentWishList, categories, items }) => {
  const [isShowingWishList, setIsShowingWishList] = useState("true");
  const toggleShowWishList = () => setIsShowingWishList(!isShowingWishList);

  const currentWishListId = currentWishList.sys.id;
  const wishListCategories = categories.filter(category => 
    category.fields.wishList?.some(wishListItem => wishListItem.sys.id === currentWishListId)
  );

  return (
    <section className="wish-list mb-8 p-4 rounded">
      <h2 className="text-3xl font-black mb-2">
        <button onClick={toggleShowWishList}>
          {currentWishList.fields.title}
          {isShowingWishList ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </h2>
      <div className={isShowingWishList ? "is-open" : "is-closed"}>
        {wishListCategories.map(wishListCategory => (
          <Category key={wishListCategory.sys.id} currentWishList={currentWishList} currentCategory={wishListCategory} items={items} />
        ))}
      </div>
    </section>
  );
};

export default WishList;
