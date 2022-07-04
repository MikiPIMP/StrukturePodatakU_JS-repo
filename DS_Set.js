/*
------------------------------------------------------
Struktura podataka: Set
Radio: Milan Minic 3/7
Datum: 09.06.2022.
------------------------------------------------------
*/

class Set {   //U prevodu sa eng --> Skup
    constructor(){
        this.baza = [];
        this.index = null;
    }

    postojiLi(element){
        return (this.baza.indexOf(element) !== (-1));    //vraca true/false  
    }

    prikazSkupa(){
        return this.baza;
    }

    dodaj(element){
        if(!(this.postojiLi(element))){       //ako je false, onda dodaj element
            this.baza.push(element);
            return true;
        }
        return false;
    }

    ukloni(element){
        if(this.postojiLi(element)){
            this.index = this.baza.indexOf(element);
            this.baza.splice(this.index, 1);
            return true;
        }
        return false;
    }

    velicina(){
        return this.baza.length;
    }

    unijaSkupova(drugiSkup){
        this.noviSkup1 = new Set();
        this.prviSkup = this.prikazSkupa();
        this.drugiSkup = drugiSkup.prikazSkupa();

        this.prviSkup.forEach(element => {
            this.noviSkup1.dodaj(element);
        });

        this.drugiSkup.forEach(element => {
            this.noviSkup1.dodaj(element);
        });
        return this.noviSkup1;
    }

    presekSkupova(drugiSkup){
        this.noviSkup2 = new Set();
        this.prviSkup = this.prikazSkupa();

        this.prviSkup.forEach(element => {
            if(drugiSkup.postojiLi(element)){
                this.noviSkup2.dodaj(element);
            }
        });
        return this.noviSkup2;
    }

    razlikaSkupova(drugiSkup){
        this.noviSkup3 = new Set();
        this.prviSkup = this.prikazSkupa();

        this.prviSkup.forEach(element => {
            if(!(drugiSkup.postojiLi(element))){
                this.noviSkup3.dodaj(element);
            }  
        });
        return this.noviSkup3;
    }
}


var mojSkupA = new Set();
var mojSkupB = new Set();

mojSkupA.dodaj('A');
mojSkupB.dodaj('B');

mojSkupA.dodaj('AA');
mojSkupA.dodaj('AAA');

mojSkupA.dodaj('B');

mojSkupB.dodaj('BB');
mojSkupB.dodaj('BBB');

mojSkupB.dodaj('A');


console.log(mojSkupA.postojiLi("A"));    //out: true
console.log(mojSkupA.postojiLi("q"));    //out: false

console.log(mojSkupA.prikazSkupa());
console.log(mojSkupB.prikazSkupa());

console.log(mojSkupA.velicina());        //out: 4
console.log(mojSkupB.velicina());        //out: 4

console.log(mojSkupA.unijaSkupova(mojSkupB));
console.log((mojSkupA.unijaSkupova(mojSkupB)).velicina());     //out: 6, znc bez duplikata (iz metode 'dodaj')

console.log(mojSkupA.presekSkupova(mojSkupB));
console.log(mojSkupB.presekSkupova(mojSkupA));

console.log(mojSkupA.razlikaSkupova(mojSkupB));
console.log(mojSkupB.razlikaSkupova(mojSkupA));

console.log(mojSkupA.ukloni('B'));
console.log(mojSkupB.ukloni('A'));

console.log(mojSkupA.prikazSkupa());
console.log(mojSkupB.prikazSkupa());

console.log(mojSkupA.velicina());        //out: 3
console.log(mojSkupB.velicina());        //out: 3

console.log(mojSkupA.postojiLi("B"));    //out: false
console.log(mojSkupB.postojiLi("A"));    //out: false


