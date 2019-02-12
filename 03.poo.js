var cl=console.log;

function Personne(nom,prenom,pseudo){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=pseudo;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new Personne("LEMAIRE","Paul","paul44");

cl(jules.nom);
cl(jules.prenom);
cl(jules.pseudo);
cl(jules.getNomComplet());

function afficherPersonne(elem){
    return elem.getNomComplet();
}

cl(afficherPersonne(paul));

jules.pseudo="jules44";
cl(afficherPersonne(jules));

cl(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
cl(jules.age);

jules.age=30;
cl(jules.age);

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.charAt(0);
}

cl(jules.getInitiales());

var PersonneSansConstructeur = {
    nom:"LEPREFET",
    prenom: "robert",
    pseudo:"robert77",
    getNomComplet : function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }

}

var robert = Object.create(PersonneSansConstructeur);
cl(robert.getNomComplet());

function Personne(nom,prenom,pseudo){
    this.nom=nom;
    this.prenom=prenom;
    this.pseudo=pseudo;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

function Client(nom,prenom,pseudo,numeroClient){
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient=numeroClient;
    this.getInfos= function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    }
}

var steve = new Client("LUCAS","Steve","steve44","A01");
cl(afficherPersonne(steve));

cl(steve.numeroClient);
cl(steve.getInfos());