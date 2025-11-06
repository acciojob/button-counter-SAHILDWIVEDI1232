
import React from "react";
import './../styles/App.css';
import ButtonCounter from "./components/ButtonCounter"; // import component

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Button Counter</h1>
      <ButtonCounter />
    </div>
  )
}

export default App;
