# React JS Keep

**reactjs-keep** is a lightweight React hook that handles mouse interactions: **mousedown**, **mousemove**, and **mouseup** with optional conditions.

## Installation

```bash
npm install reactjs-keep
# or
yarn add reactjs-keep
```

## Usage

```tsx
import React, { useState } from "react";
import useKeep from "reactjs-keep";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseDown = useKeep({
    condition: (e: React.MouseEvent) => e.button === 0, // Only if left button is clicked
    onStart: (e: React.MouseEvent) => {
      console.log("Down at:", e.clientX, e.clientY);
    },
    onMove: (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    },
    onStop: (e: MouseEvent) => {
      console.log("Up at:", e.clientX, e.clientY);
    },
  });

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        width: 300,
        height: 300,
        border: "1px solid #333",
        userSelect: "none",
      }}
    >
      <p>
        Drag within this box: {pos.x}, {pos.y}
      </p>
    </div>
  );
}

export default App;
```
