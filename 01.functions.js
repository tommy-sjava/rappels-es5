var lg = console.log;

// TP01
// Définition d'une fonction
var nombre1 = 10;
var nombre2 = 20;

function additionner (nb1, nb2) {
    return nb1 + nb2;
};

var resultat1 = additionner(nombre1, nombre2);
lg("resulat1 = " ,resultat1);

// Variable de type fonction
var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
lg("resultat2 = ", resultat2);

function multiplication(nb1, nb2) {
    return nb1 * nb2;
};
var multiplication = multiplication;
var resultat3 = multiplication(nombre1, nombre2);
lg("resultat3 = " ,resultat3);

// Fonction comme élément du 1er ordre
var afficherOperation = function(nomOperation, operation, nb1, nb2) {
    var result = operation(nb1, nb2);
    lg(nomOperation,'(',nb1,'et',nb2,') = ', result);
};

function soustraction(nb1, nb2) {
    return nb1 - nb2;
};
var soustraction = soustraction;

afficherOperation("Somme", additionner, 20,40);
afficherOperation("Multiplication", multiplication, 10,20);
afficherOperation("Soustraction", soustraction, 15,5);

