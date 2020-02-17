var titulo = document.querySelector(".titulo");		
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso/(altura*altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

console.log(paciente); //tr
console.log(tdPeso); //td que contém peso
console.log(peso); //Obter 100

console.log(imc);