export class CalcError extends Error{
    constructor(message: string){
        super(message);
        this.name = "CalculationError"
    }
}

export class DivisionByZeroError extends CalcError{
    constructor(message: string){
        super(message);
        this.name = "DivisionByZeroError"
    }
}

export class TooLongOrSmallResultError extends CalcError{
    constructor(message: string){
        super(message);
        this.name = "TooLongOrSmallResultError"
    }
}

export class InvalidExpressionError extends CalcError{
    constructor(message: string){
        super(message);
        this.name = "InvalidExpressionError"
    }
}