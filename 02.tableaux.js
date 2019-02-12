lg = console.log;
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (val) {
    lg(val);
});

var result1  = villes.every(function (val) {
    return val.includes('a');
});

lg('lettreADansToutesLesVilles =', result1);

var result2 = villes.some(function (val) {
    return val.includes('-');
});

lg('auMoinsUneVilleAvecUnTiret =', result2);

var villesSansTiretSansEspace = villes.filter(function (val) {
    return(!(val.includes('-')) && !(val.includes(' ')));
});

lg(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function (val) {
    return(val[val.length - 1] == 's')
}).map(function (val){
    return val.toUpperCase();
});

lg(villesMajusculeSeTerminantParS);