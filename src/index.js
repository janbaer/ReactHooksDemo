import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>A new way to use state in stateless functions ;-)</h2>

      <FirstNameInput />
    </div>
  );
}

const FirstNameInput = () => {
  const [firstName, setFirstName] = useState("Max");

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <p>The first name is: {firstName}</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
