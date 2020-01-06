//Request of type GET with Axios

function styleText(){
	paragraph.style.color = "#15573F";
	paragraph.style.fontFamily = "Montserrat";
	paragraph.style.fontStyle = "normal";
	paragraph.style.fontWeight = "100";
	paragraph.style.fontStyle = "normal";
	paragraph.style.fontWeight = "300";
	paragraph.style.fontSize = "16px";
	paragraph.style.lineHeight = "20px";
	paragraph.style.textAlign = "center";
	paragraph.style.marginTop = "15";
	paragraph.style.marginLeft = "5";
}

function styleDiv(){
	//Defining a style of the element of Div 
	newSquare.style.height = heightDiv.toString(); /*Altura*/
	newSquare.style.width = widthDiv.toString(); /*Largura*/
	newSquare.style.backgroundColor = "white";
}

function styleButton(){
	newButton.style.height = heightDiv - (292);
	newButton.style.width = widthDiv - (55);
	newButton.style.backgroundColor = "white";
	newButton.style.border = "0.8px solid #15573F";
	newButton.style.borderRadius = "25px";
	newButton.style.position = "relative";
}

var positionTop = ["386", "-342", "-342", "53", "-342", "-342", "53", "-342", "-342"];
var positionLeft = ["288", "609", "930","288", "609", "930","288", "609", "930"];

var heightDiv = 341;
var widthDiv = 268;

for(var i = 0;  i < positionTop.length; i++){

	//Create a new div 
	var newSquare = document.createElement("div");

	//Creat a new button 
	var newButton = document.createElement("button");

	//As the "createTextNode" don't accept css properties, I had to create a element <p> for insert the text
	var paragraph = document.createElement("p"); 
	var buttonText = document.createTextNode("buy now");


	//Defining the positions of elements
	newSquare.style.marginTop  = positionTop[i];
	newSquare.style.marginLeft = positionLeft[i];

	newButton.style.marginTop  = (parseInt(heightDiv) - 70).toString();
	newButton.style.marginLeft = (parseInt(widthDiv) - 240).toString();

	document.getElementById("main").appendChild(newSquare);
	newSquare.appendChild(newButton); //Puting the button inside of div
	newButton.appendChild(paragraph); //Puting the text inside of button
	paragraph.appendChild(buttonText);

	styleText();
	styleDiv();
	styleButton();
	
}

//When on mouse for some card 
var inputs = document.querySelectorAll("div#main div"); //Request all divs inside div#main 
var id = 1;

inputs.forEach(function(input) {
  input.addEventListener('mouseover', function hover() {
    input.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"; //The shadow will be put for him

  });

  input.addEventListener('mouseleave', function leave() {
    input.style.boxShadow = "none"; //The shadow will be hidden

  });

  	
});

//When on mouse for some button 
var buttons = document.querySelectorAll("div#main div button"); //Request all divs inside div#main 

buttons.forEach(function(button) {
	button.addEventListener('mouseover', function hover() {
		    button.style.backgroundColor = "#15573F";
		    button.style.transitionDuration = "0.5s";
	});

	button.addEventListener('mouseleave', function leave() {
		    button.style.backgroundColor = "white";
		    button.style.transitionDuration = "0.5s";

	});
});

  	//Request the informations about the plants for putting into each div
		axios.get("https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=3")
			.then(function(response) { 

				var newName = document.createTextNode(response.data.name);
				input.appendChild(newName);

				//(id < 10) ? id++ : id = 1;
					id++;
			})

			//If an error happen, other thing happen
			.catch(function(error) {
				console.warn(error);
			});