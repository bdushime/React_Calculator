import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "=") {
      handleOperation();
    } else {
      setInput((prev) => prev + value);
    }

    
  };

  function handleOperation() {
    let result;

    if (input.includes("+")) {
      const [a, b] = input.split("+");
      result = parseFloat(a) + parseFloat(b);
    } else if (input.includes("-")) {
      const [a, b] = input.split("-");
      result = parseFloat(a) - parseFloat(b);
    } else if (input.includes("x")) {
      const [a, b] = input.split("x");
      result = parseFloat(a) * parseFloat(b);
    } else if (input.includes("/")) {
      const [a, b] = input.split("/");
      result = parseFloat(a) / parseFloat(b);
    } else {
      return;
    }

    console.log(result)

    setInput(String(result));
  }

  return (
   
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <Button label="AC" onClick={handleButtonClick} />
          <Button label="+/-" onClick={handleButtonClick} />
          <Button label="%" onClick={handleButtonClick} />
          <Button label="/" onClick={handleButtonClick} />
          <Button label="7" onClick={handleButtonClick} />
          <Button label="8" onClick={handleButtonClick} />
          <Button label="9" onClick={handleButtonClick} />
          <Button label="x" onClick={handleButtonClick} />
          <Button label="4" onClick={handleButtonClick} />
          <Button label="5" onClick={handleButtonClick} />
          <Button label="6" onClick={handleButtonClick} />
          <Button label="-" onClick={handleButtonClick} />
          <Button label="1" onClick={handleButtonClick} />
          <Button label="2" onClick={handleButtonClick} />
          <Button label="3" onClick={handleButtonClick} />
          <Button label="+" onClick={handleButtonClick} />
          <Button className="zero" label="0" onClick={handleButtonClick} />
          <Button label="=" onClick={handleOperation} />
        </div>
      </div>
    
  );
}

export default App;
