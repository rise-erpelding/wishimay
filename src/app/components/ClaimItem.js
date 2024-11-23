"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import ClaimItemForm from './ClaimItemForm';
import './css/ClaimItem.css';

const ClaimItem = ({ currentItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);
  
  const itemId = currentItem.sys.id;

  const handleClaim = () => {
    setShowForm(!showForm);
  }

  const handleUnclaim = (e) => {
    e.preventDefault();
    patchEntry(itemId, {isClaimed: false, claimedBy: ""})
    setShowClaimed(false);
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
      <ClaimItemForm showForm={showForm} itemId={itemId} handleShowClaimed={setShowClaimed} />
      <div className={showClaimed ? "" : "hidden"}>
        <p>Claimed!</p>
        <button
          className="claim-item-button border-solid border-2"
          onClick={handleUnclaim}
        >
          Undo?
        </button>
      </div>
    </div>
  );
};

export default ClaimItem;
