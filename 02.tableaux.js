var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
//Créer une variable villes qui a comme valeur un tableau des chaînes de caractères suivantes : 'nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'.
console.log(villes);

// A l'aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent la lettre a.
var lettreADansToutesLesVilles = villes.every(function(val){
    return val.indexOf('a') > -1;
});
console.log(lettreADansToutesLesVilles);

// A l'aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le caractère '-'.
// auMoinsUneVilleAvecUnTiret = true
var auMoinsUneVilleAvecUnTiret = villes.some(function(val){
    return val.indexOf('-') > -1;
});
console.log(auMoinsUneVilleAvecUnTiret);

// A l'aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un tableau dont les villes n'ont ni tiret, ni espace.
// villesSansTiretSansEspace = [ 'nantes', 'paris', 'angers' ]
var villesSansTiretSansEspace = villes.filter(function(val){
    return val.indexOf(' ') < 0 && val.indexOf('-') < 0;
})
console.log(villesSansTiretSansEspace);


// la dernière lettre du nom est 's'
// les noms des villes sont en majuscules
var villesMajusculeSeTerminantParS = villes.filter(function(val){
    return val.endsWith('s');
}).map(x => x.toUpperCase());
console.log(villesMajusculeSeTerminantParS);

