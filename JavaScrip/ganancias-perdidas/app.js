//Preguntar ingresos
var income = prompt("¿Cuánto es el ingreso?");
//Crear variable costo
var costs = prompt("¿Cuánto es el costo?");
//Preguntar impuestos
var taxPercent = prompt("¿Cuánto es el porcentaje de impuestos?");
//Ganancia bruta
var grossProfit = income-costs
//Obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100
//Ganancia neta
var netIncome = grossProfit-tax;
// Mosttando ganancia neta
document.write("Tu ganancia neta es $ " + netIncome);
