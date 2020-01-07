//Positions of the cards
var positionTop = ["386", "-342", "-342", "53", "-342", "-342", "53", "-342", "-342"];
var positionLeft = ["288", "609", "930","288", "609", "930","288", "609", "930"];

var heightDiv = 341;
var widthDiv = 268;

//Create the cards 
for(var i = 0;  i < positionTop.length; i++){

	//Create a new div 
	var newSquare = document.createElement("div");

	//Declating a id for div create 
	$(newSquare).attr('id', 'divNumer'+i.toString());

	//Creat a new button 
	var newButton = document.createElement("button");

	//Declating a id for button create 
	$(newButton).attr('id', 'buttonNumer'+i.toString());

	//As the "createTextNode" don't accept css properties, I had to create a element <p> for insert the text
	var paragraph = document.createElement("p"); 
	paragraph.innerHTML = "buy now";

	//Declating a id for p create 
	$(paragraph).attr('id', 'pNumer'+i.toString());

	//Defining the positions of elements
	newSquare.style.marginTop  = positionTop[i];
	newSquare.style.marginLeft = positionLeft[i];

	newButton.style.marginTop  = (parseInt(heightDiv) - 70).toString();
	newButton.style.marginLeft = (parseInt(widthDiv) - 240).toString();

	document.getElementById("main").appendChild(newSquare);
	newSquare.appendChild(newButton); //Puting the button inside of div
	newButton.appendChild(paragraph); //Puting the text inside of button

	styleText();
	styleDiv();
	styleButton();
	
}


var allDivs = document.querySelectorAll("div#main div"); //Request all divs inside div#main 

allDivs.forEach(function(input) {

  input.addEventListener('mouseover', function hover() {
    
   	var id = (this.id).toString()[((this.id).length)-1];
	var but = document.getElementById("buttonNumer"+id); //Select the id of button respective to your div
	var p = document.getElementById("pNumer"+id); //Request the text inside the button

	//When mouse over div 
	input.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"; 
	but.style.transitionDuration = "0.5s";
	but.style.backgroundColor = "#15573F";
	p.style.color = "white";


  });

  input.addEventListener('mouseleave', function leave() {

  	var id = (this.id).toString()[((this.id).length)-1];
	var but = document.getElementById("buttonNumer"+id);
	var p = document.getElementById("pNumer"+id); //Request the text inside the button 
	 
	//When mouse leave div
    input.style.boxShadow = "none"; 
    but.style.backgroundColor = "white";
    but.style.transitionDuration = "0.5s";
    p.style.color = "#15573F";
	
  });

  	
});

//Migrate to next page when some button will be click 

var allButtons = document.querySelectorAll("div#main button");

allButtons.forEach(function(button) {

	button.addEventListener('click', function() {
		document.location.href = "sendDatas.html";
	});

});


for(var id = 1; id < 10; id++){
  	
  		var c = 0; //This variable go to sweep all divs 

  		//Request the informations about the plants for putting into each div
		axios.get("https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id="+id.toString())
			.then(function(response) { 

				// Get a div 
				var div = document.getElementById('divNumer'+(c).toString());

				c++;

				//Get a name of plant 
				var nameP = document.createElement("p"); 
				nameP.innerHTML = response.data.name;

				div.appendChild(nameP);

				//Call function for style name 
				styleNamePlant(nameP);

				//Get a price of plant 
				var priceP = document.createElement("p"); 
				priceP.innerHTML = "$"+response.data.price;

				div.appendChild(priceP);

				stylePricePlant(priceP);


				//Get a image request and create your element 
				var image = document.createElement("img");
				image.src = response.data.url;
				div.appendChild(image); 

				//Call function for style image 
				styleImagePlant(image);

				//Get a information about sun  

				var imageSun = document.createElement("img");
				var imageWater = document.createElement("img");

				var caseSun = ["no", "low", "high"];
				var caseWater = ["daily", "regularly", "rarely"];

				for(var s = 0; s < caseSun.length; s++){
					if(response.data.sun == caseSun[s]){ 
						imageSun.src = ("../assets/icons/grey/"+caseSun[s]+".svg");
					}
				}

				for(var s = 0; s < caseWater.length; s++){
					if(response.data.water == caseWater[s]){ 
						imageWater.src = ("../assets/icons/grey/"+caseWater[s]+".svg");
					}
				}

				if(response.data.toxicity == true){ 
					var imagePet = document.createElement("img");
					imagePet.src = ("../assets/icons/grey/true.svg");
					div.appendChild(imagePet); 
					styleImagePet(imagePet);
				}
				

				div.appendChild(imageSun); 
				div.appendChild(imageWater); 

				styleImageSun(imageSun);
				styleImageWater(imageWater);

			})

			//If an error happen, other thing happen
			.catch(function(error) {
				console.warn(error);
			});
}