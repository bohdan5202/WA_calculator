import { useState } from "react";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

const buttons_items:string[] = ["AC","backspace","/",
                                 "7","8","9","*",
                                 "4","5","6","-",
                                 "1","2","3","+",
                                 "0",".","="]



export function App() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick(lable: string){
    // if(parseInt(lable) === Number){
    //   setValue = lable
    // }
  }
  return (
    <div className="app">
      <div className="calc">
        <div className="display">
        <output className="dis">
          {value}
        </output>
        </div>
        <div className="buttons">
        {buttons_items.map((x)=> <button key={x} data-value={x} onClick={() => handleClick(x)}>{x}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
