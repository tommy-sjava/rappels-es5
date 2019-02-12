console.log("02 - POO");

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
};

Personne.getNomComplet = function() {
    return this.nom + ' ' + this.prenom;
}

var Jules = new Personne;
Jules.nom = 'LEMAIRE';
Jules.prenom = 'Jules';
Jules.pseudo = 'jules77';

console.log(Jules);
console.log(Jules.getNomComplet);


