interface SuperHeroe {
    names: string,
    age: number,
    address: Address,
    viewAddress: () => void
}

interface Address {
    street: string,
    country: string,
    city: string
}

const superHeroe: SuperHeroe = {
    names: 'IronMan',
    age: 32,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    viewAddress() {
        return this.names + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.viewAddress();
console.log( address );