"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import { CloseButton } from './Icons';

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
    <div className={showForm ? "bg-white p-6" : "bg-white p-6 hidden"}>
      <div className="flex flex-row-reverse">
        <CloseButton size={16} />
      </div>
      <form className={showForm ? "" : "hidden"}>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          className="block border border-neutral-500 w-full h-10 rounded-lg"
          id="email"
          name="email"
          type="email"
          value={emailAddress}
          onChange={handleInputChange}
        ></input>
        <p className="text-neutral-700 mb-4 mt-1">Only visible to list owner</p>
        <div className="button-group flex gap-3">
          <button
            onClick={handleClaimWithoutEmail}
            className="border border-black border-solid rounded-lg p-2"
          >
            Claim without email
          </button>
          <button
            onClick={handleClaimWithEmail}
            className="border-transparent rounded-lg bg-blue-600 text-white p-2"
          >
            Claim item
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClaimItemForm;