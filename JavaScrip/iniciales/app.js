//Preguntar nombre
var name = prompt("¿Cuál es tu nombre?");
// Obteniendo primera incial
var firstInitial = name.slice(0,1)
// Buscando posicion de segundo caracter
var secondInitialPosition = name.indexOf(" ") +1
// Obteniendo segunda incial
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);

console.log(firstInitial+secondInitial);
//Mostrando resultdo en la web
document.write("Tus inciales son " + firstInitial.toUpperCase()+ secondInitial.toUpperCase());
