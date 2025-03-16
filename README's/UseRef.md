# useRef Hook in React

## What is useRef?
`useRef` is a React hook that allows you to persist values across renders without causing re-renders. It is commonly used to reference DOM elements and to store mutable values.

## Why Use useRef?
- **Accessing DOM Elements** (e.g., focusing an input field).
- **Persisting Values Without Causing Re-renders** (e.g., tracking previous values).
- **Storing Previous State Without Re-rendering**.

## Example 1: Referencing a DOM Element
### **Focus Input Field on Button Click**
```jsx
import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
```
✅ **useRef does not cause a re-render when its value changes.**

## Example 2: Storing Previous State
### **Tracking Previous Value of a State Variable**
```jsx
import React, { useState, useRef, useEffect } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousState;
```
✅ **Previous state value is stored without causing extra re-renders.**

## Example 3: Counting Component Renders
```jsx
import React, { useState, useRef, useEffect } from "react";

const RenderCounter = () => {
  const [value, setValue] = useState(0);
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return (
    <div>
      <h2>Value: {value}</h2>
      <h3>Component Rendered: {renderCountRef.current} times</h3>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};

export default RenderCounter;
```
✅ **Counts how many times a component has re-rendered without affecting the UI.**

## Key Takeaways
- `useRef` does **not** trigger re-renders when updated.
- It is useful for **accessing DOM elements** and **storing mutable values**.
- It can be used to **persist values between renders**, such as tracking previous state.

---