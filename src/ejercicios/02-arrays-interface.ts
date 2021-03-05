// Arrays

interface Person {
    names: string,
    lastName: string,
    habilities: string[],
    city?: string
};

const person: Person = {
    names: 'Mao',
    lastName: 'Puerta',
    habilities: [ 'Bash', 'Counter', 'Healing' ]
};

person.city = 'Medellin';

console.table( person );
