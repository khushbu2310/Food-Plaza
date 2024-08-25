import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h3>Count1: {count1}</h3>
      <button onClick={increaseCount}>Increase Count</button>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: khushbu@gmail.com</h3>
    </div>
  );
};

export default User;
