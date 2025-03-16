# Context API in React

## What is Context API?
Context API is a built-in React feature used for global state management. It allows passing data through the component tree without needing to manually pass props at every level (prop drilling).

## Why Use Context API?
- Avoids **prop drilling** (passing props manually through multiple components).
- Centralizes state and makes it easily accessible.
- Improves code maintainability and readability.

## Example: Theme Toggle with Context API

### **Project Structure**
```
/my-app
│── /src
│   ├── /context
│   │   ├── ThemeContext.js  // Creates and provides context
│   ├── /components
│   │   ├── Navbar.jsx  // Consumes context
│   │   ├── Home.jsx    // Consumes context
│   ├── App.jsx
│── package.json
```

### **Step 1: Create Context (ThemeContext.js)**
```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

### **Step 2: Use Context in Components (Navbar.jsx & Home.jsx)**

#### **Navbar.jsx (Consuming Context)**
```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h3>Navbar - {theme} Theme</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
```

#### **Home.jsx (Consuming Context)**
```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#f9f9f9" : "#222", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h1>Home Page - {theme} Theme</h1>
    </div>
  );
};

export default Home;
```

### **Step 3: Wrap Components with Context Provider (App.jsx)**
```jsx
import ThemeProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
```

## Key Takeaways
- **Context API replaces prop drilling** by providing a global state.
- **useContext hook** is used to access context values.
- **The Context Provider wraps the components** that need access to the shared state.

### When to Use Context API?
✔ When multiple components need access to the same state.

✔ When avoiding deeply nested prop drilling.

✔ When global themes, authentication, or language settings are needed.

---