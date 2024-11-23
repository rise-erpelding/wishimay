import WishList from './components/WishList';
import { fetchEntries } from '../lib/contentful';

export async function getStaticProps() {
  const items = await fetchEntries();
  const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");
  const categories = items.filter(item => item.sys.contentType.sys.id === "category");
  const wishListItems = items.filter(item => item.sys.contentType.sys.id === "item");

  return {
    props: {
      wishLists,
      categories,
      wishListItems,
    },
    revalidate: 60,
  };
}

export default async function Home({ wishLists, categories, wishListItems }) {
  return (
    <>
    <h1 className="text-2xl font-bold p-4">Wish Lists 2024</h1>
    {wishLists.map(wishList => (
      <WishList key={wishList.sys.id} currentWishList={wishList} categories={categories} items={wishListItems} />
    ))}
  );
}
