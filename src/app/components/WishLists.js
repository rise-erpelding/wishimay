import WishList from './WishList';
import { fetchEntries } from '../../lib/contentful';

export async function getStaticProps() {
    console.log("calling getstatic props")
    const items = await fetchEntries();
    const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");
    const categories = items.filter(item => item.sys.contentType.sys.id === "category");
    const wishListItems = items.filter(item => item.sys.contentType.sys.id === "item");

    console.log('WishLists:', wishLists);
    console.log('Categories:', categories);
    console.log('WishListItems:', wishListItems);

    return {
        props: {
        wishLists,
        categories,
        wishListItems,
        },
        revalidate: 30,
    };
}

export default function WishLists({ wishLists, categories, wishListItems }) {
    if (!wishLists) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {wishLists.map(wishList => (
                <WishList key={wishList.sys.id} currentWishList={wishList} categories={categories} items={wishListItems} />
            ))}
        </>
    );
}