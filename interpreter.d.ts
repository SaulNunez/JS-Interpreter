export = Interpreter;

declare class Interpreter {
    constructor(code: string, initFunc?: (interpreter: Interpreter, scope: object) => void);
    step() : boolean;
    run(): boolean;
} 