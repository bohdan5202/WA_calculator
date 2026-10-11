const digits:string[] = ["0","1","2","3","4","5","6","7","8","9"]
const operators = ["+","-","*","/"] as const;
type Operation = (typeof operators)[number];

function isOperation(value: string): value is Operation{
    return (operators as readonly string[]).includes(value);
}

export function nextStr(curr: string, next:string) : string{
    let result:string = ""
    if (curr === "Error") curr = "";
// numbers
    if (digits.includes(next)){ 
        if (IsLastNumbZero(curr)) result = curr.slice(0,-1) + next;
        else result = curr + next;
    }
    
// op    
    else if (isOperation(next)){
        if (curr === "") return "0" + next;
        if (isOperation(theLast(curr)))
            {curr = curr.slice(0,-1);}
        result = curr + next;
    }

// backspace    
    else if (next === "backspace"){
        result = curr.slice(0,-1);
    }

// AC    
    else if (next === "AC") result = "";

//dot
    else if (next === "."){ 
        if (isOperation(theLast(curr)) || curr === "") next = "0.";
        else if (theLastHasDot(curr)) return result = curr;
        result = curr + next;
    }
// equals
    else if (next === "=") {
        // result = eval(curr); JS string calculate is bad for us XD

        result = equalManual(curr);
    }

    return result;
}

function theLast(all:string):string{
    return all.slice(-1);
}

function theLastHasDot(all:string):boolean{
    let splited:string[] = (all.split(/[+\-*/]/).at(-1)?? "").split("");
    return splited.includes(".")  
}

function IsLastNumbZero(all:string):boolean{
    let splited:string = all.split(/[+\-*/]/).at(-1)?? "";
    return splited === "0";
}

function equalManual(all:string):string{
    if (all.startsWith("-")) all = "0" + all;
    let buffer:string[] = all.split(/([+\-*/])/);
    if (buffer.at(-1) === "") buffer.splice(-2);
    let nump:number[] = buffer.filter((item ,i )=> i % 2 === 0).map(parseFloat);
    let ops:Operation[] = buffer.filter(isOperation);
    for (let i = 0; i < ops.length; i++){
        const x = ops[i];
        if (x === "*" || x === "/"){
            nump[i] = operate(nump[i] ?? 0, x,nump[i+1] ?? 0);
            nump.splice(i+1,1);
            ops.splice(i,1);
            i--;
        }
    }
    let total:number = nump[0] ?? 0;
    for (let i = 0; i < ops.length; i++){
        const x = ops[i];
        const y = nump[i+1];
        if(x !== undefined && y !== undefined){
        total = operate(total, x, y);
        }
    }
    if (!Number.isFinite(total)) return "Error";
    total = parseFloat(total.toPrecision(12));
    return String(total);
}

function operate(num1:number , op:Operation, num2: number): number {
    switch(op){
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        }
}