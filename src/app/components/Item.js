import './ClaimItem';
import ClaimItem from './ClaimItem';
import './css/Item.css';

const Item = ({ currentItem }) => {
  const isClaimed = currentItem.fields.isClaimed;
  return (
    <li className="item p-6 mb-2 rounded-lg bg-white shadow">
      <div className="item-title-section">
        {currentItem.fields.url ? (
          <a href={currentItem.fields.url}>
            <h4 className="font-semibold mb-1 text-2xl sm:text-xl">{currentItem.fields.title}</h4>
          </a>
        ) : (
          <h4 className={isClaimed ? "font-semibold mb-1 text-2xl sm:text-xl line-through" : "font-semibold mb-1 text-2xl sm:text-xl"}>{currentItem.fields.title}</h4>
        )}
      </div>
      <div className="item-description-section">
        {currentItem.fields.description && <p className={isClaimed ? "text-xl sm:text-base line-through" : "text-xl sm:text-base"}>{currentItem.fields.description}</p>}
      </div>
      <div className="item-image-section flex justify-center">
        <img
          alt={currentItem.fields.title}
          src={currentItem.fields.imageUrl || '/shopping-bags.jpg'}
          className="item-image"
        />
      </div>
      <div className="item-claim-item-section">
        <ClaimItem currentItem={currentItem} />
      </div>
    </li>
  );
};

export default Item;
