var cl = console.log;
cl("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2){
    return nb1+nb2;
}

var resultat1 = additionner(nombre1,nombre2);
cl("resultat1 = "+resultat1);

var somme = additionner;

var resultat2 = somme(nombre1,nombre2);
cl("resultat2 = "+resultat2);

var multiplication = function(e1,e2){
    return e1*e2;
}

var resultat3 = multiplication(nombre1,nombre2);
cl("resultat3 = "+resultat3);

var afficherOperation = function(name,somme,e1,e2){
    return name+"("+e1+","+e2+") = "+somme(e1,e2);
};

cl(afficherOperation("Somme",somme,20,40));
cl(afficherOperation("Multiplication",multiplication,10,20));
cl(afficherOperation("Soustraction",function(e1,e2){
    return e1-e2;
},15,5));
