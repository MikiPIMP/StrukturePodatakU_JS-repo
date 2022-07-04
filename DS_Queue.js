/*
------------------------------------------------------
Struktura podataka: Queue
Radio: Milan Minic 3/7
Datum: 09.06.2022.
------------------------------------------------------
*/

class Queue {

    constructor(){
        this.baza = [];
        this.index = 0;
    }

    prikaziSve(){
        console.log(this.baza);
    }

    dodajURed(element){
        this.baza[(this.index)++] = element;
    }

    removePrviElement(){
        this.baza.shift();
    }

    getPrviElement(){
        return this.baza[0];
    }

    velicina(){
        return this.baza.length;
    }

    jePrazan(){
        return (this.baza.length === 0);
    }
}

var Q1 = new Queue();

Q1.prikaziSve();

Q1.dodajURed(34);
Q1.dodajURed(22);
Q1.dodajURed(1);
Q1.dodajURed(800);
Q1.dodajURed(5665);

Q1.prikaziSve();

console.log(Q1.velicina());

console.log(Q1.jePrazan());

console.log(Q1.getPrviElement());
Q1.removePrviElement();
console.log(Q1.getPrviElement());

Q1.prikaziSve();
