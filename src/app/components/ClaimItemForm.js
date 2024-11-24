"use client";
import { useState } from 'react';
import { patchEntry } from '../../lib/contentful';
import { CloseButton } from './Icons';

const ClaimItemForm = ({ itemId, handleShowClaimed, handleCloseForm }) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleClaimWithoutEmail = (e) => {
    e.preventDefault();
    handleShowClaimed();
    patchEntry(itemId, { isClaimed: true });
  }

  const handleClaimWithEmail = (e) => {
    e.preventDefault();
    patchEntry(itemId, { isClaimed: true, claimedBy: emailAddress })
    handleShowClaimed();
  }

  const handleInputChange = (e) => {
    setEmailAddress(e.target.value);
  }

  return (
    <div className="bg-white p-6 rounded-b-lg md:rounded-lg">
      <div className="flex flex-row-reverse">
        <button onClick={handleCloseForm}><CloseButton size={16} /></button>
      </div>
      <form>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          className="block border border-neutral-500 w-full h-10 rounded-lg px-2"
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