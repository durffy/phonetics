
var NatoAlphabet = {
	"a": "Alpha",
	"b": "Bravo",
	"c": "Charlie",
	"d": "Delta",
	"e": "Echo",
	"f": "Foxtrot",
	"g": "Golf",
	"h": "Hotel",
	"i": "India",
	"j": "Juliett",
	"k": "Kilo",
	"l": "Lima",
	"m": "Mike",
	"n": "November",
	"o": "Oscar",
	"p": "Papa",
	"q": "Quebec",
	"r": "Romeo",
	"s": "Siera",
	"t": "Tango",
	"u": "Uniform",
	"v": "Victor",
	"w": "Wiskey",
	"x": "X-ray",
	"y": "Yankee",
	"z": "Zulu"
  };

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