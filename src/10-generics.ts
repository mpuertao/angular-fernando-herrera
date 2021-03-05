function typeGenerico<T>(argument: T) {
    return argument;
}

let iamString = typeGenerico( 'Hello' );
let iamNumber = typeGenerico( 1234 );
let iamArray = typeGenerico( [1234, 5678, 9012] );