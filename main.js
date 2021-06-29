import {NatoAlphabet} from "./alphabet.js";   
console.log(NatoAlphabet);
	
var textToTranscribe = "";
var transcribedOutput = document.getElementById("transcribedOutput");
var arrayToTranscribe = []


function transcribeOnClick(){
	transcribedOutput.innerHTML = ""
	textToTranscribe = document.getElementById("textToTranscribe").value; 
	convertStringToArray();
	arrayToTranscribe.forEach(transcribeChar)
}

function convertStringToArray(){
	arrayToTranscribe = Array.from(textToTranscribe);
	console.log(arrayToTranscribe);
}

function transcribeChar(index){
	if(index == " "){
		transcribedOutput.innerHTML += "<br>";
	}else{
		transcribedOutput.innerHTML += index.toUpperCase() + " as in " + "<b>" 
										+ NatoAlphabet[index.toLowerCase()] + "</b>" +"<br>";
	}
	
}