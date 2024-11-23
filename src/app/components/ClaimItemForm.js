"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import './css/ClaimItem.css';

const ClaimItemForm = ({ showForm, itemId, handleShowClaimed }) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleClaimWithoutEmail = (e) => {
    e.preventDefault();
    handleShowClaimed(true);
    patchEntry(itemId, { isClaimed: true });
  }

  const handleClaimWithEmail = (e) => {
    e.preventDefault();
    patchEntry(itemId, { isClaimed: true, claimedBy: emailAddress })
    handleShowClaimed(true);
  }

  const handleInputChange = (e) => {
    setEmailAddress(e.target.value);
  }

  return (
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

    </form>
  );
}

export default ClaimItemForm;