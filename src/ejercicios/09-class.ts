class PersonNormal {

    constructor(
        public name: string,
        public address: string
    ) {}
};
class Superheroe extends PersonNormal {

    constructor(
        public nameHeroe: string,
        public age: number,
        public city: string
    ) {
        super( nameHeroe, 'Street 19 avenue North');
    }
};
    
const imprime = new Superheroe( 'Hulk', 35, 'Miami' );