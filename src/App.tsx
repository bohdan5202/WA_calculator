import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

const buttons_items = [["AC","backspase","/"],
                        ["7","8","9","*"],
                        ["4","5","6","-"],
                        ["1","2","3","+"],
                        ['0',".","="]]

export function App() {
  return (
    <div className="app">
      <div className="calc">
        <div className="display">

        </div>
        <div className="buttons">
        {buttons_items.map((x)=> <button key={x}>{x}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
