import './ClaimItem';
import ClaimItem from './ClaimItem';
import './css/Item.css';

const Item = ({ currentItem }) => {
  const isClaimed = currentItem.fields.isClaimed;
  const liBaseClassNames = "p-4 item mb-2 rounded-lg flex sm: flex-col gap-2 bg-neutral-50 shadow";
  const liClassNames = isClaimed ? 
    liBaseClassNames + " line-through" :
    liBaseClassNames;
  return (
    <li className={liClassNames}>
      <div>
        {currentItem.fields.url ? (
          <a href={currentItem.fields.url} className="font-semibold mb-1">
            <h4>{currentItem.fields.title}</h4>
          </a>
        ) : (
          <h4 className="font-semibold mb-1">{currentItem.fields.title}</h4>
        )}
        {currentItem.fields.description && <p>{currentItem.fields.description}</p>}
      </div>
      <div>
        {currentItem.fields.imageUrl && <img alt={currentItem.fields.title} src={currentItem.fields.imageUrl} className="h-48" />}
      </div>
      <ClaimItem currentItem={currentItem} />
    </li>
  );
};

export default Item;
