console.log("02 - Tableaux");

var villes = ['Nantes', 'Paris', 'Saint-Nazaire', 'angers', 'Le Mans'];

villes.forEach(function(element){
    console.log(element);
});

var lettreADansToutesLesVilles = function(element, index, array) {
    return element.includes('a');
}

var test = villes.every(lettreADansToutesLesVilles);

console.log(test);

var auMoinsUneVilleAvecUnTiret = function(element, index, array) {
    return element.includes('-');
}

var test2 = villes.some(auMoinsUneVilleAvecUnTiret);

console.log(test2);

var villesSansTiretSansEspace = function(element, index, array) {
    if(!element.includes('-') && !element.includes(' ')){
        return element;
    }
}

var test3 = villes.filter(villesSansTiretSansEspace);
console.log(test3);

var villesMajusculeSeTerminantParS = function(element, index, array) {
    return element.endsWith('s');
}
var tableauMaj = villes.filter(villesMajusculeSeTerminantParS)
.map(function(uneVille){
    return uneVille.toUpperCase();
});
console.log(tableauMaj);