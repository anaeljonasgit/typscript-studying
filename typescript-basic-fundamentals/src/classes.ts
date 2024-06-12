interface IPerson {
    id: number;
    name: string;
    age: number;
};

class Person implements IPerson {
    readonly id: number;
    name: string;
    age: number;
    protected password: string;
    private just_here: string;

    constructor(id: number, name: string, age: number, password: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
        this.just_here = '123';
    };

    say_my_name(): string {
        return this.name;
    };
};

const teste = new Person(1, 'Carro', 23, '123');

class Employee extends Person {
    constructor(id: number, name: string, age: number, password: string) {
        super(id, name, age, password);
    };

    who_am_i() {
        return this.name;
    };
};

class Person_2 {
    constructor(
        readonly id: number,
        name: string,
        age: number,
        protected password: string,
        private just_here: string
    ) {};
};