interface SuperHeroe2 {
    names1: string,
    age: number,
    address1: Address2,
}

interface Address2 {
    names2: string,
    age: number,
}

const superHeroe2: SuperHeroe2 = {
    names1: 'Hulk',
    age: 40,
    address1: {
        names2: 'Hulk2',
        age: 41
    }
}

const { names1, age } = superHeroe2;



console.log( names1, age );