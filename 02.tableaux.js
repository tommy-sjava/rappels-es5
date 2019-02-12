var villes = ['nantes','paris','saint-nazaire', 'angers', 'le mans'];

function afficher(element){
    console.log(element)
}

villes.forEach(afficher);

var contientA = function(element){
    return element.includes('a');
}

console.log('Toutes les villes contiennent "a" dans leur nom :', villes.every(contientA));

var contientTiret = function(element){
    return element.includes('-');
}

console.log('Au moins une ville avec un tiret :', villes.some(contientTiret));


var villesSansTiretSansEspace = villes.filter(ville => !ville.includes('-') && !ville.includes(' '));
console.log(villesSansTiretSansEspace);


var villesMajusculeSeTerminantParS = villes.filter(ville => ville[ville.length-1] === 's').map(ville => ville.toUpperCase());
console.log(villesMajusculeSeTerminantParS);

