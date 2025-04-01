import "./App.css";

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
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export function Square() {
  return <button className="square">X</button>;
}
