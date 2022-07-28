import ReactDOM from "react-dom/client";
import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <h3>Hello There! What is your name?</h3>
      <input></input>
      <button onClick={() => alert("Hello")}>Say Hello</button>
    </div>
  );
}

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}
