//EXERCICE1
let html = '<button onclick="insererSaisie()">Insérer le texte</button>'
document.body.innerHTML = html
function insererSaisie() {
  let saisie = prompt("Entrez votre texte ici : ");

  if (saisie) {
    let paragraphe = document.createElement("p");

    paragraphe.textContent = saisie;

    document.body.appendChild(paragraphe);
  }
}

//EXERCICE2

let a = parseInt(prompt("entrer votre 1 nombre: "));
let b = parseInt(prompt("entrer votre 2 nombre: "));


let result = a + b;


alert("La somme de " + a + " et " + b + " est " + result);


//EXERCICE3

let budget = 1000;


let achats = 800;


if (budget >= achats) {
  document.body.innerText="Le budget permet de payer les achats.";
} else {
  document.body.innerText="Le budget ne permet pas de payer les achats.";
}



//EXERCICE4


let prixHT = parseFloat(prompt("Veuillez entrer le prix HT :"));

let tva = 0.2;
let prixTTC = prixHT * (1 + tva);


document.body.innerText = "Le prix TTC est de " + prixTTC.toFixed(2) + " €";

//EXERCICE5

let HT = parseFloat(prompt("Veuillez entrer le prix HT :"));

let TVA = parseFloat(prompt("Veuillez entrer le prix TVA :"));

let prixTTC = HT * (1 + TVA);


document.body.innerText = "Le prix TTC est de " + prixTTC.toFixed(2) + " €";

//EXERCICE6

let HT = parseFloat(prompt("Veuillez entrer le prix HT :"));

let TVA = parseFloat(prompt("Veuillez entrer le prix TVA :"));

let prixTTC = HT * (1 + TVA);

if(prixTTC >=100)
{
let html = `<h2 style="color:red ">Le prix TTC est : ${prixTTC.toFixed(2)} €</h2>`;
document.body.innerHTML = html;
}
else
{
let html = `<h2 style="color:green">Le prix TTC est : ${prixTTC.toFixed(2)} €</h2>`;
document.body.innerHTML = html;

}

//EXERCICE7

var cocktailElement = "<h1>Mes <span>cocktails préférés</span></h1><p>Mojito</p><p>Gin Fizz</p><p>Bloody mary<p><p>Long Island Iced Tea</p><p>Mais si je ne devais qu'en retenir qu'un : <strong id=\"cocktail\"></strong></p>"
document.body.innerHTML += cocktailElement;

//EXERCICE8
var table = '<table border="1">'
    var rows = 5;
    var columns = 3;
    for (var i =0; i < rows; i++){
        table += "<tr>"
        for(var j = 0 ; j < columns ; j++){
            table += '<td>  Cell' + i +'-'+ j + '</td> \n'
        }
        table += "<tr>"
    }
    document.body.innerHTML += table;



//EXERCICE9

var table = '<table border="1">'
    var rows = parseInt(prompt("enter the number of rows"));
    var columns = parseInt(prompt("enter the number of columns"));
    for (var i =0; i < rows; i++){
        table += "<tr>"
        for(var j = 0 ; j < columns ; j++){
            table += '<td>  Cell' + i +'-'+ j + '</td> \n'
        }
        table += "<tr>"
    }
    document.body.innerHTML += table;


//EXERCICE10
var liste = "<ul>"

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 100);
    liste += "<li>" + randomNumber + "</li>";
}
liste += "</ul>";

document.body.innerHTML += liste;

//EXERCICE11

var red = Math.floor(Math.random() * 256); 
    var green = Math.floor(Math.random() * 256); 
    var blue = Math.floor(Math.random() * 256); 

    document.body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';




//EXERCICE12

const container = document.createElement('div');
    for (let i = 0; i < 12; i++) {
        const randomId = Math.floor(Math.random() * 100);
        const img = document.createElement('img');
        img.src = `https://picsum.photos/id/${randomId}/350/350`;
        container.appendChild(img);
    }
    document.body.appendChild(container);
    document.body.innerHTML += container;
















