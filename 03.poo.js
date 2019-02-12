lg = console.log;

function Personne (nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return 'nom :' + this.nom + ', prénom :' + this.prenom + ', pseudo :' + this.pseudo;
    };
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

function afficherPersonne(object){
    lg(object.nom);
    lg(object.prenom);
    lg(object.pseudo);
    lg(object.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
lg(jules.getNomComplet());
lg(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';
lg(jules.age);

jules.age = 30;
lg(jules.age);

Personne.prototype.getInitiales = function (){
    return this.prenom.charAt(0)+this.nom.charAt(0);
}

lg(jules.getInitiales());

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function (){
        return 'nom :' + this.nom + ', prénom :' + this.prenom + ', pseudo :' + this.pseudo;
    }
}

lg(robert.getNomComplet());

function Client (nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom,  prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function() {
        return 'Numero du client :' + this.numeroClient + ', nom :' + this.nom + ', prenom :' + this.prenom;
    };
}

var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');
afficherPersonne(steve);
lg(steve.numeroClient);
lg(steve.getInfos());