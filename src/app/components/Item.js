import './ClaimItem';
import ClaimItem from './ClaimItem';
import './css/Item.css';

const Item = ({ currentItem }) => {
  const isClaimed = currentItem.fields.isClaimed;
  return (
    <li className="p-6 mb-2 rounded-lg flex flex-col sm:flex-row gap-2 bg-white shadow">
      <div className="order-2">
        {currentItem.fields.url ? (
          <a href={currentItem.fields.url}>
            <h4 className="font-semibold mb-1 text-2xl sm:text-xl">{currentItem.fields.title}</h4>
          </a>
        ) : (
          <h4 className={isClaimed ? "font-semibold mb-1 text-2xl sm:text-xl line-through" : "font-semibold mb-1 text-2xl sm:text-xl"}>{currentItem.fields.title}</h4>
        )}
      </div>
      <div className="order-2">
        {currentItem.fields.description && <p className={isClaimed ? "text-xl sm:text-base line-through" : "text-xl sm:text-base"}>{currentItem.fields.description}</p>}
      </div>
      <div className="order-1 m-0 m-auto">
        {currentItem.fields.imageUrl && <img alt={currentItem.fields.title} src={currentItem.fields.imageUrl} className="w-full max-w-80" />}
      </div>
      <div className="order-2">
        <ClaimItem currentItem={currentItem} />
      </div>
    </li>
  );
};

export default Item;
