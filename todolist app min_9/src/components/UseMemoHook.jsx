import React, { useState, useEffect, useMemo } from 'react';

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoize slow calculation
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Memoize theme
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "10px",
      marginTop: "10px"
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);

  return (
    <div>
      <h2>UseMemo Hook Demo</h2>

      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value) || 0)}
      />

      <button onClick={() => setDark(prev => !prev)}>
        Change Theme
      </button>

      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Running slow function...");
  for (let i = 0; i < 500000000; i++) {} // SAFE loop
  return num * 2;
}

export default UseMemoHook;
