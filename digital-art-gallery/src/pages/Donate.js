import React, { useState } from 'react';
import { processDonation } from '../services/paymentService';

function Donate() {
  const [amount, setAmount] = useState('');

  const handleDonation = async (e) => {
    e.preventDefault();
    const result = await processDonation(amount);
    if (result.success) {
      alert('Thank you for your donation!');
      setAmount('');
    } else {
      alert('Failed to process donation. Please try again.');
    }
  };

  return (
    <div className="donate p-5">
      <h1 className="text-2xl font-bold mb-3">Support Our Artists</h1>
      <form onSubmit={handleDonation}>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter donation amount ($)"
          className="border p-2 rounded w-full mb-3"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Donate
        </button>
      </form>
    </div>
  );
}

export default Donate;
