const Category = ({ items }) => {
  // const wishLists = items.filter(item => item.sys.contentType.sys.id === "wishList");

  return (
    <li>
      <h3>Category title</h3>
      <ul>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </li>
  );
};

export default Category;
