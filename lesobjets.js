var cl = console.log;

var obj1 = {};
var obj2={
    nom:'Carreaux',
    prenom:'Baptiste'
}

cl(obj2);

obj2.age=24;

obj2.toString = function(){
    return this.nom +" "+this.prenom+" "+this.age+" ans";
}

cl(obj2.toString());

function Pizza(nom,ingredients){
    this.nom=nom;
    this.ingredients=ingredients;
}

var gourmande = new Pizza("Gourmande",["oeuf","mozza","jambon","champignon","lardons"]);
gourmande.toString = function(){
    var res =  this.nom+" composé de : ";
    cl(this.ingredients);
    for(var ingre of this.ingredients){
        res+=ingre+" ";
    }
    return res;
}
cl(gourmande.toString());