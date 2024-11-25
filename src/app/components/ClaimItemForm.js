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
    <div className="claim-item-form bg-white pt-6 mt-6 md:pt-0 md:pl-6 md:mt-0 md:ml-4 border-t border-neutral-400 md:border-l md:border-t-0">
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
        <div className="flex justify-end gap-3">
          <button
            onClick={handleClaimWithoutEmail}
            className="border border-black border-solid rounded-lg p-2 md:text-sm"
          >
            Claim without email
          </button>
          <button
            onClick={handleClaimWithEmail}
            className="border-transparent rounded-lg bg-blue-600 text-white p-2 md:text-sm"
          >
            Claim item
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClaimItemForm;