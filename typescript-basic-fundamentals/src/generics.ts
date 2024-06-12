// Arrow function com type variável.
const return_value = <TypeVariavel>(value: TypeVariavel) => {
    return value;
};

const message = return_value<string>('Carro');
const count = return_value<number>(5);

// Normal function com type variável.
function get_first_value_from_array<TypeVariavel>(array: TypeVariavel[]) {
    return array[0];
};

const first_string_value = get_first_value_from_array<string>(['1', '2', '3']);
const first_number_value = get_first_value_from_array<number>([1, 2, 3]);

// Promisses com type variável.
const returnPromise = async (): Promise<number> => {
    return 5;
};

// Classes com type variável.
class GenericNumber<TypeVariavel> {
    zero_value: any;
    sum: (x: TypeVariavel, y: TypeVariavel) => any;

    constructor(zero_value: TypeVariavel, sum: (x: TypeVariavel, y: TypeVariavel) => TypeVariavel) {
        this.zero_value = zero_value;
        this.sum = sum;
    };
};