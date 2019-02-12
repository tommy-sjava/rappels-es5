function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    
    this.getNomComplet = function() {
        return this.nom +" "+ this.prenom +" "+  this.pseudo;
    }
}

function afficherPersonne(Personne) {
    return Personne;
}

var jules = new Personne();
jules.prenom = "Jules";
jules.nom = "LEMAIRE";
jules.pseudo = "jules44";


var paul = new Personne();
paul.prenom = "Paul";
paul.nom = "LEMAIRE";
paul.pseudo = "paul44";


afficherPersonne(paul);
afficherPersonne(jules);

console.log(jules.age);
