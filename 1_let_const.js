var x = 5;
console.log(x);
x = 45;
console.log(x);

const personne = {nom:'patrick', prenom:'pepe'};

console.log('salut mon nom est '+ personne.nom+' et mon prenom est: '+ personne.prenom);

console.log(`salut mon nom est ${personne.nom} et mon prenom est: ${personne.prenom}`);



let multiplication = (x, y) => {
    console.log( x*y);
}

//fonction flechées

let multiplication = (x, y) => x * y;
multiplication(5, 7);

userId = user.id;
username = user.name;

let {marque, puissance} = voiture;

userStreet = user_complex.address.street;