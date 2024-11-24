"use client";
import { useState, useEffect } from 'react';
import { patchEntry } from '../../lib/contentful';
import ClaimItemForm from './ClaimItemForm';
import './css/ClaimItem.css';

const ClaimItem = ({ currentItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);
  const existingClaimedStatus = currentItem.fields.isClaimed;
  const itemId = currentItem.sys.id;

  useEffect(() => {
    setShowClaimed(existingClaimedStatus);
  }, [existingClaimedStatus]);

  const handleClaim = () => {
    setShowForm(true);
  }

  const handleCloseForm = () => setShowForm(false);

  const handleShowClaimed = () => {
    setShowClaimed(true);
    setShowForm(false);
  }

  const handleUnclaim = async (e) => {
    e.preventDefault();
    try {
      await patchEntry(itemId, { isClaimed: false, claimedBy: "" });
      setShowClaimed(false);
    } catch (error) {
      console.error('Failed to unclaim the item:', error);
    }
  };


  return (
    <>
    {existingClaimedStatus && !showForm && (
      <div>
        <h5>Already claimed</h5>
      </div>
    )}
    {!showForm && !showClaimed && (
      <div className="flex items-center gap-4 justify-between sm:justify-end">
        <h5>Planning to buy this? Claim it!</h5>
        <button
          className="border-transparent rounded-lg bg-blue-600 text-white p-2 sm:text-sm"
          onClick={handleClaim}
        >
          Claim
        </button>
      </div>
    )
    }
    {showForm && (
      <ClaimItemForm
        itemId={itemId}
        handleShowClaimed={handleShowClaimed}
        handleCloseForm={handleCloseForm}
      />
    )}
    {!existingClaimedStatus && showClaimed && !showForm && (
      <div className="flex items-center justify-between gap-4">
        <p className="text-xl font-bold pt-6">Claimed!</p>
        <div className="text-right">
          <p className="text-neutral-700 mb-2">Need to undo?</p>
          <button
            className="border border-black border-solid rounded-lg p-2 sm:text-sm"
            onClick={handleUnclaim}
            >
            Undo?
          </button>
        </div>
      </div>
    )}
    
    </>
  );
};

export default ClaimItem;
