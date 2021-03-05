interface Product {
    description: string,
    price: number
}

const telephone: Product = {
    description: 'Xiaomi',
    price: 250
}

const tablet: Product = {
    description: 'Lenovo',
    price: 350
}


function calculateISV( products: Product[] ):[number, number] {
    let total = 0;

    products.forEach( ( { price } ) => {
        total += price;
    });
    return [ total, total * 0.19 ];
}


const articles = [ telephone, tablet ];
const [ total, isv ] = calculateISV( articles );
console.log( 'Total: ', total );
console.log( 'ISV: ', isv );