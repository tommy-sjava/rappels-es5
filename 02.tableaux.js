var lg = console.log;

var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

// forEach()
villes.forEach(function (ville) {
    lg(ville);
});

//every()

function contientA(reponse) {
    return reponse['a'];
};


lg(villes.every(contientA));
