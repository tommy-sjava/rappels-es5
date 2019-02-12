console.log("02 - Tableaux");

lg = console.log;

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (val) {
    lg(val);
});

var lettreADansToutesLesVilles = villes.every(function (val) {
    return val.includes('a');
});

lg('lettreADansToutesLesVilles = ', lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function (val) {
    return val.includes('-');
});

lg('auMoinsUneVilleAvecUnTiret = ', auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function (val) {
    return !val.includes('-') & !val.includes(' ');
});

lg('villesSansTiretSansEspace = ', villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(val){
    return val.endsWith('s');
}).map(function (val){
    return val.toUpperCase();
});

lg('villesMajusculeSeTerminantParS = ',villesMajusculeSeTerminantParS);

