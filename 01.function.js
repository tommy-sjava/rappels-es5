lg = console.log;
lg("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);
lg('resultat1 =', resultat1);

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
lg('resultat2 =', resultat2);

var multiplication = function(nb1, nb2){
    return nb1 * nb2;
}

var resultat3 = multiplication(nombre1, nombre2);
lg('resultat3 =', resultat3);

var afficherOperation = function(nomOperation, operation, nb1, nb2) {
    lg(nomOperation, '(',nb1, ',', nb2, ') = ', operation(nb1, nb2));
}

afficherOperation('Somme', somme, 20, 40);
afficherOperation('Multiplication', multiplication, 10, 20);
afficherOperation('Soustraction', function(nb1, nb2){return nb1 - nb2}, 15, 5);