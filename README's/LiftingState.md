# Lifting State Up in React

## What is Lifting State Up?
Lifting state up is a React pattern where state is moved to a common ancestor component so that it can be shared between multiple child components. Instead of each child managing its own state, the parent manages it and passes it down as props.

## Why Use Lifting State Up?
- Avoids redundant state in multiple components.
- Keeps data centralized and easier to manage.
- Allows sibling components to communicate via a common parent.

## Example: Counter with Lifting State Up
### **Project Structure**
```
/my-app
│── /src
│   ├── /components
│   │   ├── ParentComponent.jsx  // Manages state & passes data to children
│   │   ├── ChildA.jsx  // Displays state
│   │   ├── ChildB.jsx  // Modifies state
│   ├── App.jsx
│── package.json
```

### **ParentComponent.jsx (Manages State)**
```jsx
import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
};

export default ParentComponent;
```

### **ChildA.jsx (Receives Data and Displays State)**
```jsx
const ChildA = ({ count }) => {
  return <h3>Count: {count}</h3>;
};

export default ChildA;
```

### **ChildB.jsx (Updates State)**
```jsx
const ChildB = ({ setCount }) => {
  return <button onClick={ () => setCount(prev => prev + 1)}>Increase</button>;
};

export default ChildB;
```

### **App.jsx (Wraps Components)**
```jsx
import React , {useState} from 'react';
import ChildA from "./ChildA.jsx";
import ChildB from "./ChildB.jsx";

const ParentComponent = () => {
 const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildA count={count}/>
       <ChildB setCount={setCount}/>
    </div>
  )
}

export default ParentComponent
```

## Key Takeaways
- **State is managed in the parent component** and passed down via props.
- **Child components only receive data or functions** to modify the parent state.
- **Avoids prop drilling** by structuring components efficiently.

### When to Use Lifting State Up?
✔ When multiple components need to share the same state.

✔ When sibling components need to communicate.

✔ When state management should be centralized for better control.

---