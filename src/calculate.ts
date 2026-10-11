const digits:string[] = ["0","1","2","3","4","5","6","7","8","9"]
const opp:string[] = ["/","*","+","-"]
let result:string = ""

export function nextStr(curr: string, next:string) : string{
// numbers
    if (digits.includes(next)) {
        result = curr + next;
    }
    
// op    
    else if (opp.includes(next)){
        if (opp.includes(theLast(curr)))
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
        if (opp.includes(theLast(curr)) || curr === "") next = "0.";
        else if (theLastHasDot(curr)) return result = curr;
        result = curr + next;
    }
// equals
    
    
    return result;
}

function theLast(all:string):string{
    return all.slice(-1);
}

function theLastHasDot(all:string):boolean{
    let splited:string[] = (all.split(/[+\-*/]/).at(-1)?? "").split("");
    return splited.includes(".")  
}