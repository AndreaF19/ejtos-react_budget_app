import React, { useState } from 'react';

function Budget() {
  const [budget, setBudget] = useState(100);
  const spending = 5000; // Replace with the actual spending value

  const increaseBudget = () => {
    if (budget + 10 > 20000) {
      alert('Error: Value cannot exceed 20,000');
    } else {
      setBudget(budget + 10);
    }
  };

  const decreaseBudget = () => {
    if (budget - 10 <= spending) {
      alert('Error: Budget cannot be lower than spending');
    } else {
      setBudget(budget - 10);
    }
  };

  return (
    <div>
      <h1>Editable Budget</h1>
      <label htmlFor="budget">Budget:</label>
      <input type="number" id="budget" value={budget} readOnly />
      <button onClick={increaseBudget}>Increase</button>
      <button onClick={decreaseBudget}>Decrease</button>
    </div>
  );
}

export default Budget;
