
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
	"z": "Zulu",
	"1": "One",
	"2": "Two",
	"3": "Three",
	"4": "Four",
	"5": "Five",
	"6": "Six",
	"7": "Seven",
	"8": "Eight",
	"9": "Nine",
	"0": "Zero",
	"`": "Accent mark",
	"~": "Tidle",
	"!": "Bang",
	"@": "At Symbol",
	"#": "Hashtag or Pound Sign",
	"$": "Dollar Sign",
	"%": "Percent Sign",
	"^": "Carrot Symbol",
	"&": "Ampersand",
	"*": "Asterisk",
	"(": "Left Parentheses",
	")": "Right Parentheses",
	"-": "Minus",
	"_": "Underscore",
	"=": "Equals",
	"+": "Plus",
	"[": "Left bracket",
	"]": "Right bracket",
	"{": "Left Curly bracket",
	"}": "Right Curly bracket",
	"\\": "Back Slash",
	"|": "Pipe",
	";": "Semicolon",
	":":"Colon",
	"'":"Apostrophe",
	"\"":"Quotation",
	",":"Comma",
	".":"Period",
	"/":"Forward Slash",
	"<":"Less Than",
	">":"Greater Than",
	"?":"Question Mark"

}

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
		transcribedOutput.innerHTML += "SPACE <br>";
	}else{
		transcribedOutput.innerHTML += index.toUpperCase() + " as in " + "<b>" 
										+ NatoAlphabet[index.toLowerCase()] + "</b>" +"<br>";
	}
	
}