import './App.css';

export default function App() {
  return(
    <>
    <Square />
    </>
  )
  
}

export function Square() {
  return <button className="square">X</button>;
}