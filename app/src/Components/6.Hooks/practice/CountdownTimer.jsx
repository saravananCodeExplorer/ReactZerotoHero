// CountdownTimer.jsx
import { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // cleanup
    }
  }, [time]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Countdown Timer</h2>
      <h1>{time}</h1>
      {time === 0 && <p>⏰ Time’s up!</p>}
    </div>
  );
}

export default CountdownTimer;
