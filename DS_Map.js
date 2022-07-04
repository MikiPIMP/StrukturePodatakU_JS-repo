/*
------------------------------------------------------
Struktura podataka: Map
Radio: Milan Minic 3/7
Datum: 09.06.2022.
------------------------------------------------------
*/

var myMap = function() {

	this.collection = {};
	this.count = 0;

	this.size = function() {
		return this.count;
	};

	this.set = function(key, value) {  //Seter
		this.collection[key] = value;
		this.count++;
	};

	this.has = function(key) {
		return (key in this.collection);
	};

	this.get = function(key) {        //Geter
		return (key in this.collection) ? this.collection[key] : null;
	};

	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};

	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};

	this.clearSve = function() {
		this.collection = {};
		this.count = 0;
	};
};

let map = new myMap();

map.set('Volvo', 2009);
map.set('BMW', 2006);
map.set('FORD GT', 2019);
map.set('Mazda', 2022);

console.log(map.get('BMW'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();

map2.has('Mazda');
map2.entries();

let keyObj = {},
    keyFunc = function() {};

map2.set('nestoBezVeze', 'stringNeki');
map2.set(keyObj, 'objekat');
map2.set(keyFunc, 'funkcija');
map2.set(NaN, 'NaN vrednost')

console.log(map2.size);

console.log(map2.get('nestoBezVeze'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));

