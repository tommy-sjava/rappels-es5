console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2){
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);

console.log('resultat1 = ', resultat1);
//Creation variable somme
var somme = additionner;
var resultat2 = somme(nombre1, nombre2);

console.log('resultat2 = ', resultat2);

var multiplication = function(nombre1, nombre2){
    return nombre1 * nombre2;
}

var resultat3 = multiplication(nombre1, nombre2);

console.log('resultat3 = ', resultat3);

var afficherOperation = function(nomOperation, fonction, nb1, nb2){
    return nomOperation +'('+nb1+','+nb2+') = ' + fonction(nb1,nb2);
}

console.log(afficherOperation("Somme",somme,20,40));
console.log(afficherOperation("Multiplication", multiplication, 10, 20));
console.log(afficherOperation("Soustraction", function(nombre1, nombre2){
    return nombre1 - nombre2;},15, 5));