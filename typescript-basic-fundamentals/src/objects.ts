// Type.
type User = {
    first_name: string;
    age: number;
    email?: string;
    password?: string;
    orders: (string | number)[];
    register?(): string
};

const user: User = {
    first_name: 'Carro',
    age: 2,
    email: 'carro',
    password: 'carro',
    orders: ['carro', 'moto', 2],
    register() {
        return 'carro'
    }
};

// Função com parâmetro opcional.
const opcional_function_param = (message?: string) => {

};

// Dizendo que um parâmetro opcional existe.
opcional_function_param(user.password!);

// Unions.
type Author = {
    books: string[]
};

const author: Author & User = {
    first_name: 'Carro',
    age: 2,
    email: 'carro',
    password: 'carro',
    orders: ['carro', 'moto', 2],
    books: ['carro']
};

// Interfaces.
interface UserInterface {
    readonly first_name: string, // Apenas leitura.
    email: string
};

const user_2: UserInterface = {
    first_name: 'Carro',
    email: 'carro'
};

// Type simples.
type Grade = number | string;
const grade: Grade = 1;