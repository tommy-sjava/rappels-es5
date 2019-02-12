var cl = console.log;

var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

villes.forEach(function (val) {
    cl(val);
});

function contientA(elem){
    return elem.includes("a");
}

function contientAuMoinsUnTiret(elem){
    return elem.includes("-");
}

var lettreADansToutesLesVilles = villes.every(contientA);
cl("toutes les villes contiennent un a : "+lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret  = villes.some(contientAuMoinsUnTiret);
cl("Une ville contient au moins un - : "+auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(ville => !ville.includes("-") && !ville.includes(" "));
cl(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS  = villes.filter(ville => ville[ville.length-1]==="s").map(ville => ville.toUpperCase());
cl(villesMajusculeSeTerminantParS);