"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import './css/ClaimItem.css';

const ClaimItem = ({ currentItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  const itemId = currentItem.sys.id;

  const handleInputChange = (e) => {
    setEmailAddress(e.target.value);
  }

  const handleClaim = () => {
    setShowForm(!showForm);
  }

  const handleClaimWithoutEmail = (e) => {
    e.preventDefault();
    setShowClaimed(true);
    patchEntry(itemId, {isClaimed: true});
  }

  const handleClaimWithEmail = (e) => {
    e.preventDefault();
    patchEntry(itemId, {isClaimed: true, claimedBy: emailAddress})
    setShowClaimed(true);
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
      <form className={showForm ? "claim-item-form" : "claim-item-form hidden"}>
        <label htmlFor="email">Enter email address:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={emailAddress}
          onChange={handleInputChange}
        ></input>
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
