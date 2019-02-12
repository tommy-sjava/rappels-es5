console.log("03 - POO");

lg = console.log;

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return 'Nom : ' + this.nom + ', Prenom : ' + this.prenom + ', Pseudo : ' + this.pseudo;
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

var afficherPersonne = function (personne) {
    lg(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules';

afficherPersonne(jules);

lg(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';

lg(jules.age);

jules.age = 30;

lg(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

lg(jules.getInitiales());

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return ;
    }
};

afficherPersonne(robert);

function Client(numeroClient, nom, prenom, pseudo) {
    this.numeroClient = numeroClient;
    Personne.call(this, nom, prenom, pseudo);
    this.getInfos = function(){
        return 'Numéro client : '+this.numeroClient +', Nom : ' + this.nom + ', Prenom : ' + this.prenom;
    }
}



var steve = new Client('A01','LUCAS','Steve','steve44');

afficherPersonne(steve);

lg(steve.numeroClient);

lg(steve.getInfos())