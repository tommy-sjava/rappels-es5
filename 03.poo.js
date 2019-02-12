// Créer une fonction constructeur Personne qui permet de créer un objet ayant les caractéristiques suivantes :
// Un attribut nom.
// Un attribut prenom.
// Un attribut pseudo.
// Une méthode getNomComplet qui retourne une chaine de caractères contenant le nom, le prénom et le pseudo.

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ", " + this.prenom + ", " + this.pseudo;
    }
}

// Créer un objet jules en utilisant la fonction constructeur Personne avec :
// Le prénom Jules.
// Le nom LEMAIRE.
// Le pseudo jules77.

var jules = new Personne("Jules", "LEMAIRE", "D4RKJUL3S");

// Créer un objet paul en utilisant la fonction constructeur Personne avec :
// Le prénom Paul.
// Le nom LEMAIRE.
// Le pseudo paul44.

var paul = new Personne("Paul", "LEMAIRE", "paul44");

// Afficher dans la console :
// Le nom de l'objet jules.
console.log(jules.nom);
// Le prénom de l'objet jules.
console.log(jules.prenom);
// Le pseudo de l'objet jules.
console.log(jules.pseudo);
// Le nom complet de l'objet jules.
console.log(jules.getNomComplet());
// Répéter l'affichage précédent pour l'objet paul (créer une fonction réutilisable afficherPersonne).
// Tester.
var afficherPersonne = function (personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}
afficherPersonne(paul);

// Modifier un objet
// Modifier le pseudo de l'objet jules en jules44.
jules.pseudo = "jules44";
// Afficher dans la console :
// Le nom complet de l'objet jules.
console.log(jules.getNomComplet());
// Ajouter une propriété à Personne
// Afficher la propriété age de l'objet jules.
// Vérifier que la valeur est undefined.
Personne.age;
console.log(jules.age);
// Ajouter la propriété age à la structure Personne avec la valeur par défaut NON RENSEIGNE.
// Utiliser la propriété prototype.
// Afficher la propriété age de l'objet jules dans la console.
Personne.prototype.age = "NON RENSEIGNé";
console.log(jules.age);
// Modifier l'age de l'objet jules à 30.
// Afficher la propriété age de l'objet jules dans la console.
jules.age = 30;
console.log(jules.age);

// Ajouter une méthode à Personne
// Ajouter la méthode getInitiales à la structure Personne qui retourne une chaine de caractères composée de la première lettre du prénom et de la première lettre du nom.
// En javascript, pour récupérer un caractère d'une chaine de caractères, utiliser la fonction charAt. Exemple :
// "Jules".charAt(0) == "J"
// "Jules".charAt(3) == "e"
// Afficher dans la console les initiales de l'objet jules.
Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
console.log(jules.getInitiales());
// Objet sans fonction constructeur
// Créer un objet robert sans fonction constructeur avec :
// L'attribut prenom qui vaut Robert.
// L'attribut nom qui vaut LEPREFET.
// L'attribut pseudo qui vaut robert77.
// La méthode getNomComplet qui retourne une chaine de caractères contenant le nom, le prénom et le pseudo.
// Réutiliser la fonction afficherPersonne pour afficher les informations de l'objet robert.
var robert = {
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function(){
        return this.nom + ", " + this.prenom + ", " + this.pseudo;
    }
}
afficherPersonne(robert);

// Héritage via une fonction constructeur
// Créer une fonction constructeur Client qui possède les mêmes caractéristiques que Personne et qui contient en plus :
function Client(nom, prenom, pseudo, numClient){
    Personne.call(this, nom,prenom,pseudo );
    this.numClient = numClient;
    this.getInfos = function(){
        return this.numClient + ", "+this.nom+", "+this.prenom;
    }
}

// Créer un objet steve à partir de la structure Client avec :
var steve = new Client("Steve", "Lucas", "steve44", "A01");
afficherPersonne(steve);
// Afficher le numéro client de l'objet steve dans la console.
console.log(steve.numClient);
// Afficher dans la console le résultat de l'exécution de la fonction getInfos pour l'objet steve dans la console.
console.log(steve.getInfos());