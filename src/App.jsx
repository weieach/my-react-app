import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Board />
    </>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square /><Square />
      </div>
      <div className="board-row">
      <Square /><Square /><Square />
      </div>
      <div className="board-row">
      <Square /><Square /><Square />
      </div>
    </>
  );
}

export function Square({ value }) {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log('clicked');
  }

  return (
  <button 
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>);
}
