"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import './css/ClaimItem.css';

const ClaimItem = ({ currentItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);

  const itemId = currentItem.sys.id;
  const fields = currentItem.fields;

  // console.log("currentItem", currentItem);

  const handleClaim = () => {
    setShowForm(!showForm);
  }

  const handleClaimWithoutEmail = (e) => {
    e.preventDefault();
    setShowClaimed(true);
    patchEntry(itemId, {isClaimed: true});
    console.log("handling claim without email");
  }

  const handleClaimWithEmail = (e) => {
    e.preventDefault();
    setShowClaimed(true);
    console.log("handling claim with email");
  }

  const handleUnclaim = (e) => {
    e.preventDefault();
    setShowClaimed(false);
    console.log("handle unclaim");
  }

  return (
    <div>
      <h5>Planning to buy this? Claim it!</h5>
      <button
        className="claim-item-button border-solid border-2"
        onClick={handleClaim}
      >
        Claim
      </button>
      <form className={showForm ? "claim-item-form" : "claim-item-form hidden"}>
        <label htmlFor="email">Enter email address:</label>
        <input id="email" name="email" type="email"></input>
        <div className="button-group">
          <button
            onClick={handleClaimWithoutEmail}
            className="claim-item-button border-solid border-2"
          >
            Claim without email
          </button>
          <button
            onClick={handleClaimWithEmail}
            className="claim-item-button border-solid border-2"
          >
            Claim with email
          </button>
        </div>
        <div className={showClaimed ? "" : "hidden"}>
          <p>Claimed!</p>
          <button
            className="claim-item-button border-solid border-2"
            onClick={handleUnclaim}
          >
            Undo?
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClaimItem;
