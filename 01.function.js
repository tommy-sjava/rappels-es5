
var nombre1 = 10;
var nombre2 = 20;

function additionner(nombre1, nombre2) {
    return nombre1 + nombre2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log("resultat 1 = " + resultat1);

console.log("<--------------------------->")

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat 2 = " + resultat2);

console.log("<--------------------------->")


var multiplication = function(nombre1, nombre2){
    return nombre1 * nombre2;
}
resultat3 = multiplication(nombre1, nombre2);
console.log("resultat 3 = " + resultat3);

var soustraction = function(nombre1, nombre2){
    return nombre1 - nombre2;
}

console.log("<--------------------------->")



function afficherOperation(nomOperation, fct, nb1, nb2) {
    // déclarer une propriété avec this
    this.nomOperation = nomOperation;
    this.fct = fct;
    this.nb1 = nb1;
    this.nb2 = nb2;
}

var sommeTest = new afficherOperation("Somme", somme, 20, 40);

sommeTest.toString = function() {
    return this.nomOperation + "(" + this.nb1 + "," + this.nb2 + ") = " + this.fct(this.nb1, this.nb2);
}



console.log(sommeTest.toString());

console.log("<--------------------------->")


var multiplicationTest = new afficherOperation("Multiplication", multiplication, 10, 20);

multiplicationTest.toString = function() {
    return this.nomOperation + "(" + this.nb1 + "," + this.nb2 + ") = " + this.fct(this.nb1, this.nb2);
}
console.log(multiplicationTest.toString());

console.log("<--------------------------->")

var soustractionTest = new afficherOperation("Soustraction", soustraction, 15, 5);

soustractionTest.toString = function() {
    return this.nomOperation + "(" + this.nb1 + "," + this.nb2 + ") = " + this.fct(this.nb1, this.nb2);
}
console.log(soustractionTest.toString());