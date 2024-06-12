const age: number = 5;
const first_name: string = 'Carro';
const is_valid: boolean = false;

// Arrays.
const array_de_numeros: number[] = [1, 2, 3];
const array_de_string: string[] = ['carro'];

// Tuples.
const person: [string, number] = ['carro', 2];

// Lista de tuples.
const people: [string, number][] = [
    ['carro', 2],
    ['carro', 2]
];

// Intersections (tipo um 'ou').
const product_id: string | number = 2;

// Enum (hash-key para deixar organizado).
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
};

const direction = Direction.Up;

// Type assertions (forçar uma tipagem).
const product_name: any = 'Carro';
let item_id_1 = product_name as string;
let item_id_2 = <string>product_name;