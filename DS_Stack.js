/*
------------------------------------------------------
Struktura podataka: Stack
Radio: Milan Minic 3/7
Datum: 09.06.2022.
------------------------------------------------------
Funkcije: push(dodavanje), pop(brisanje poslednjeg), peek(prikaz), length(broj elemenata)
------------------------------------------------------
*/

//PRVI NACIN (PREKO KLASE) ----------------------------------------------------------------------------
var Stack = function(){  // Klasa za stek
    this.brojac = 0;
    this.baza = {};

    this.push = function(element){  // funkcija za dodavanje elemenata u stek
        this.baza[this.brojac] = element;
        this.brojac++;
    }

    this.pop = function(){       // funkcija koja vraca i brise poslednji uneti element u steku
        if(this.brojac === 0){
            return undefined;
        }

        this.brojac--;
        var rez = this.baza[this.brojac];
        delete this.baza[this.brojac];
        return rez;
    }
    
    this.peekIndex = function(index){   // funkcija koja konzoluje element na proizvoljnoj poziciji
        if((this.baza[index] === null) || (this.baza[index] === undefined)){
            console.log(`Element na trazenoj poziciji (${index}) --> nepostoji!`);
            return;
        }
        console.log(`Element na poziciji (${index}) je: ${this.baza[index]}`);
    }

    this.peekEnd = function(){  // funkcija koja konzoluje poslednji element
        console.log(this.baza[(this.brojac - 1)]);
    }

    this.size = function(){  // funkcija koja prikazuje broj elemenata u steku
        return this.brojac;
    }
}

var mojPrviStek = new Stack();   //kreiranje objekta (mojPrviStek) na osnovu klase Stack

mojPrviStek.push(66);   //poz: 0
mojPrviStek.push(100);  //poz: 1
mojPrviStek.push(14);   //poz: 2
mojPrviStek.push(58);   //poz: 3
mojPrviStek.push(2);    //poz: 4
mojPrviStek.push(456);  //poz: 5

console.log(mojPrviStek.size());  //out: 6
console.log(mojPrviStek.pop());   //out: 456
mojPrviStek.peekEnd();            //out: 2
mojPrviStek.peekIndex(2);         //out: 14

mojPrviStek.peekIndex(100);       //out: Error poruka 
mojPrviStek.peekIndex(-3);        //out: Error poruka

mojPrviStek.push('Neki_String');  //poz: 5
mojPrviStek.peekIndex(5);         //out: 'Neki_String'
mojPrviStek.peekEnd();            //out: 'Neki_String'



//DRUGI NACIN (PREKO LISTE) ---------------------------------------------------
/*
var stack = [];
var word = 'Gorila';
var rword = '';

var brojac = 0;
for(let x = 0; x < (word.length); x++){
    stack.push(word[x]);
    brojac++;
}

for(let x = 0; x < (brojac); x++){
    rword += stack.pop();
}

if(rword === word){
    console.log('Rec: ' + word + ' je palindrom');
} else {
    console.log('Rec: ' + word + ' nije palindrom');
}
*/
