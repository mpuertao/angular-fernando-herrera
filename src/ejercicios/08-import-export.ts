import { Product, calculateISV } from './07-desestructure-arguments';

const carShop: Product[ ] = [
    {
        description: 'Tel1',
        price: 100
    },
    {
        description: 'Tel2',
        price: 200
    }
];
 
const [ total, isv ] = calculateISV( carShop );

console.log('Total: ', total);
console.log('ISV: ', isv);