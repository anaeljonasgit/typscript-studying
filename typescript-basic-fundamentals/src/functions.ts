const sum_1 = (x: number, y: number) => {
    return x + y;
};

const sum_2 = (x: number, y: number): number => {
    return x + y;
};

const sum_3 = (x: number, y: number): string => {
    return (x + y).toString();
};

const sum_4 = (x: number, y: number): string | number => {
    return (x + y).toString();
};

// Void (função que não retorna nada).
const log = (message: string): void => {
    console.log(message);
};

// Interface com funções.
interface MathFunction {
    (x: number, y: number): number
};

const sum_5: MathFunction = (x: number, y: number): number => {
    return x + y;
};