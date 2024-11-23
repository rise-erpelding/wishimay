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
    setShowForm(!showForm);
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
      {existingClaimedStatus ? (
        <div>
          <h5>Already claimed</h5>
        </div>
      ) : (
        <>
          {showClaimed ? (
            <div>
              <p>Claimed!</p>
              <button
                className="claim-item-button border-solid border-2"
                onClick={handleUnclaim}
              >
                Undo?
              </button>
            </div>
          ) : (
            <div>
              <h5>Planning to buy this? Claim it!</h5>
              <button
                className="claim-item-button border-solid border-2"
                onClick={handleClaim}
              >
                Claim
              </button>
            </div>
          )}
        </>
      )}
      {showForm && (
        <ClaimItemForm
          showForm={showForm}
          itemId={itemId}
          handleShowClaimed={setShowClaimed}
        />
      )}
    </>
  );
};

export default ClaimItem;
