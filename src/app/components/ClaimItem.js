import './css/ClaimItem.css';

const ClaimItem = ({ currentItem }) => {
  return (
    <div>
      <h5>Planning to buy this? Claim it!</h5>
      <button className="claim-item-button border-solid border-2">Claim</button>
      <form>
        <label for="email">Enter email address:</label>
        <input id="email" name="email" type="email"></input>
        <div class="button-group">
          <button>Claim without email</button>
          <button>Claim with email</button>
        </div>
      </form>
    </div>
  );
};

export default ClaimItem;
