import { useEffect, useState } from "react";
import "./index.css";
import { Delete } from "lucide-react";
import ReactConfetti from "react-confetti";
import { nextStr } from "./calculate";



const buttons_items:string[] = ["AC","backspace","/",
                                 "7","8","9","*",
                                 "4","5","6","-",
                                 "1","2","3","+",
                                 "0",".","="]



export function App() {
  const [value, setValue] = useState<string>("");
  const [confetti, setConfetti] = useState<boolean>(false);
  useEffect( () => {
      function onKey(e: KeyboardEvent){
        if(e.key === "Enter"){ e.preventDefault();  handleClick("=");}
        else if(e.key === "Backspace"){ e.preventDefault();  handleClick("backspace");}
        else if(e.key === "Escape"){e.preventDefault();  handleClick("AC");}
        else if(buttons_items.includes(e.key)){e.preventDefault(); handleClick(e.key);}
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [value]);

  function handleClick(lable: string){
    const print = nextStr(value, lable)
    setValue(print)
    if (lable === "=" && print !== "Error" && print !== value) setConfetti(true);
  }

  return (
    <div className="app">
      {confetti && <ReactConfetti
        recycle={false}
        numberOfPieces={300}
        gravity={0.3}
        style={{ position: "fixed" }}
        onConfettiComplete={() => setConfetti(false)}
      />}
      <div className="calc">
        <div className="display">
        <output className="dis">
          {value}
        </output>
        </div>
        <div className="buttons">
        {buttons_items.map((x)=> <button key={x} data-value={x} onClick={() => handleClick(x)}>{
        x === "backspace" ? <Delete size={30} /> : x}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
