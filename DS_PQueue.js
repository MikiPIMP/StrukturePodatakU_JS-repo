/*
------------------------------------------------------
Struktura podataka: Prior Queue
Radio: Milan Minic 3/7
Datum: 09.06.2022.
------------------------------------------------------
*/

class P_Queue {

    constructor(){
        this.baza = [];
        this.index = 0;
    }

    prikaziSve(){
        console.log(this.baza);
    }

    dodajURed(element){
        var dodat;
        if(this.jePrazan()){
            this.baza.push(element);
            dodat = true;
        } else {
            dodat = false;
            for (let p = 0; p < this.baza.length; p++) {
                if(element[0] < this.baza[p][0]){
                    this.baza.splice(p, 0, element);
                    dodat = true;
                    break;
                }
            }
        }
        if(!dodat){
            this.baza.push(element);
        }
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

var PQ1 = new P_Queue();

PQ1.dodajURed([0, 'Neki string0']);
PQ1.dodajURed([4, 'Neki string4']);
PQ1.dodajURed([3, 'Neki string3']);
PQ1.dodajURed([1, 'Neki string1']);
PQ1.dodajURed([5, 'Neki string5']);
PQ1.dodajURed([2, 'Neki string2']);

PQ1.prikaziSve();



