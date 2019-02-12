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

var villesSansTiretSansEspace = [];
villes.filter(function (val) {
    if(!(val.includes('-')) && !(val.includes(' '))){
        villesSansTiretSansEspace.push(val);
    }
});

lg(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = [];
villes.filter(function (val) {
    if(val[val.length - 1] == 's'){
        villesMajusculeSeTerminantParS.push(val.toUpperCase());
    }
})

lg(villesMajusculeSeTerminantParS);