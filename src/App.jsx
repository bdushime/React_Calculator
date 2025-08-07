import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [input , setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev)=> prev + value);
  }

  return (
    <>
        <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <Button label="1" onClick={handleButtonClick} />
          <Button label="2" onClick={handleButtonClick} />
          <Button label="3" onClick={handleButtonClick} />
          <Button label="+" onClick={handleButtonClick} />
          <Button label="4" onClick={handleButtonClick} />
          <Button label="5" onClick={handleButtonClick} />
          <Button label="6" onClick={handleButtonClick} />
          <Button label="-" onClick={handleButtonClick} />
          <Button label="7" onClick={handleButtonClick} />
          <Button label="8" onClick={handleButtonClick} />
          <Button label="9" onClick={handleButtonClick} />
          <Button label="/" onClick={handleButtonClick} />
          <Button label="C" onClick={() => setInput('')} />
        </div>
      </div>
    </>
  )
}

export default App
