var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

function afficher(villes) {
    console.log(villes);
}
villes.forEach(afficher);

console.log("<--------------------------->")

var lettreADansToutesLesVilles = villes.every(function(element) {
    return element.indexOf('a') > -1;
});
console.log(lettreADansToutesLesVilles);

console.log("<--------------------------->")

var auMoinsUneVilleAvecUnTiret = villes.some(function(element) {
    return element.indexOf('-') > -1;
});
console.log(auMoinsUneVilleAvecUnTiret);

console.log("<--------------------------->")

var villesSansTiretNiEspace = villes.filter(function(element) {
    return element.indexOf('-') < 0 && element.indexOf(' ') < 0;
});
console.log(villesSansTiretNiEspace);

console.log("<--------------------------->")

var villesMajusculeSeTerminantParS = villes.filter(function(element) {
    return element.endsWith('s'); 
}).map(el => el.toUpperCase());
console.log(villesMajusculeSeTerminantParS);


