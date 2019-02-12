console.log("01 - Fonctions");

var nb1 = 10, nb2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nb1, nb2);
console.log('Resultat 1 = ', resultat1);

var somme = additionner;

var resultat2 = somme(nb1, nb2);
console.log('Resultat 2 = ', resultat2);

var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nb1, nb2);
console.log('Resultat 3 = ', resultat3);

var afficherOperation = function (monOperation, operation, nb1, nb2) {
    console.log(monOperation, '(', nb1, ',', nb2, ') = ', operation(nb1, nb2));
}

afficherOperation("Somme", somme, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", function (nb1, nb2) {
    return nb1 - nb2;
}, 15, 5);