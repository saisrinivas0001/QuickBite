import React, { useState, useEffect } from "react";

function WelcomePopup() {
  const [show, setShow] = useState(true);

  // Optional: auto-hide after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => setShow(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>👋 Welcome to Quick Bite!</h2>
        <p>Start by adding ingredients to find delicious recipes 🍲</p>
        <button onClick={() => setShow(false)}>Let's Start</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
