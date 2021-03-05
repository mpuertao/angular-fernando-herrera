// funciones

const sum = ( a: number, b: number):number => {
    return a + b;
}

const multiplication = ( num: number, otherNum?: number, base = 2 ):number => {
    return num * base;
}

interface Person1 {
    names: string,
    pv: number,
    viewHp: () => void,
}

const cure = ( person: Person1, curex: number ):void => {
    person.pv += curex;
}

const newPerson: Person1 = {
    names: 'Mao',
    pv: 50,
    viewHp() {
        console.log( this.pv );
    }
}

cure( newPerson, 20);
newPerson.viewHp();