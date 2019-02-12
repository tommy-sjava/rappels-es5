console.log("01 - Fonctions");

// Créer une fonction avec le nom additionner;

var nb1 = 10;
var nb2 = 20;
function additionner(nb1, nb2){
    return nb1 + nb2;
}
var res1 = additionner(nb1, nb2);
console.log(res1);

// Créer une variable sommedont la valeur est une référence à la fonction additionner.
// Créer une variable resultat2 dont le résultat est l'invocation de la fonction somme avec les paramètres nombre1 et nombre2.

var somme = additionner;
var res2 = somme(nb1, nb2);
console.log(res1);

// Créer une variable multiplication dont la valeur est une fonction qui effectue la multiplication entre 2 nombres.
// Créer une variable resultat3 dont le résultat est l'invocation de la fonction multiplication avec les paramètres nombre1 et nombre2.

function multiplication(nb1, nb2){
    return nb1 * nb2;
}
var res3 = multiplication(nb1, nb2);
console.log(res3);

// Invoquer la fonction afficherOperation avec les paramètres suivants :
// la chaîne de caractères Somme;
// la variable somme précédemment créée;
// la valeur 20;
// la valeur 40.
function afficherOperation(nomOperation, fct, nb1, nb2){
    this.nomOperation = nomOperation;
    this.fct = fct;
    this.nb1 = nb1;
    this.nb2 = nb2;
}
var test = new afficherOperation("SOMME", somme, 20, 40);
test.toString = function () {
    return this.nomOperation+"("+this.nb1+", "+this.nb2+") = "+this.fct(this.nb1, this.nb2);
}
console.log(test.toString());

// Invoquer la fonction afficherOperation avec la Multiplication;

var test2 = new afficherOperation("MULTIPLICATION", multiplication, 10, 20);
test2.toString = function () {
    return this.nomOperation+"("+this.nb1+", "+this.nb2+") = "+this.fct(this.nb1, this.nb2);
}
console.log(test2.toString());

// Invoquer la fonction afficherOperation avec les paramètres suivants :
// la chaîne de caractères "Soustraction";
// une fonction anonyme qui effectue une opération de soustraction entre 2 nombres;

var test3 = new afficherOperation("MULTIPLICATION", function(nb1, nb2){
    return nb1-nb2;
}, 15, 5);
test3.toString = function () {
    return this.nomOperation+"("+this.nb1+", "+this.nb2+") = "+this.fct(this.nb1, this.nb2);
}
console.log(test3.toString());