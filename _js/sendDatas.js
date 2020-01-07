//Request the informations about the plants for putting into each div
axios.get("https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=7")
	.then(function(response) { 

		//Name of plant choice
		var name = document.createElement("p"); 
		name.innerHTML = response.data.name;

		//Price of plant choice
		var price = document.createElement("p"); 
		price.innerHTML = "$"+response.data.price;

		//Image of plant choice 
		var image = document.createElement("img");
		image.src = response.data.url;

		//Informations about plant choice
		var div = document.getElementById("choiceUser");

		var caseSun = ["no", "low", "high"];
		var caseWater = ["daily", "regularly", "rarely"];
		var pets = [true, false];

		var imageSun = document.createElement("img");
		var imageWater = document.createElement("img");

		for(var s = 0; s < caseSun.length; s++){
			if(response.data.sun == caseSun[s]){ 
				imageSun.src = ("../assets/icons/grey/"+caseSun[s]+".svg");
				var pSun = document.createElement("p");
				var textSun = document.createTextNode(caseSun[s][0].toUpperCase()+caseSun[s].slice(1)+" sunlight");

			}
		}

		for(var s = 0; s < caseWater.length; s++){
			if(response.data.water == caseWater[s]){ 
				imageWater.src = ("../assets/icons/grey/"+caseWater[s]+".svg");
				var pWater = document.createElement("p");
				var textWater = document.createTextNode("Water "+caseWater[s]);
			}
		}

		for(var s = 0; s < pets.length; s++){
			if(response.data.toxicity == pets[s]){ 

				var imagePet = document.createElement("img");
				imagePet.src = ("../assets/icons/grey/"+pets[s]+".svg");
				div.appendChild(imagePet); 
				styleImagePet(imagePet);

				var pPet = document.createElement("p");

				if (pets[s] == false){

					pPet.innerHTML = "Non-toxic for pets";

				} else {
					
					pPet.innerHTML = "<b>Beware!</b> Toxic for pets";
				}

				div.appendChild(pPet);
				styleTextPet(pPet);
			}
		}
		div.appendChild(name);
		div.appendChild(price);
		div.appendChild(image);
		div.appendChild(imageSun); 
		div.appendChild(imageWater); 
		div.appendChild(imageWater); 
		div.appendChild(pSun);
		div.appendChild(pWater);
		pSun.appendChild(textSun);
		pWater.appendChild(textWater);

		//Call functions by style of elements
		styleName(name)
		stylePrice(price);
		styleImage(image);
		styleImageSun(imageSun);
		styleImageWater(imageWater);
		styleTextSun(pSun);
		styleTextWater(pWater);

	})
			
	//If an error happen, other thing happen
	.catch(function(error) {
		console.warn(error);
	});

function styleMsg(msg){
	msg.style.position = "absolute";
	msg.style.width = "218px";
	msg.style.height = "27px";
	msg.style.marginLeft = "80px";
	msg.style.marginTop = "380px";

	msg.style.fontFamily = "Montserrat";
	msg.style.fontStyle = "normal";
	msg.style.fontWeight = "300";
	msg.style.fontSize = "15px";
	msg.style.lineHeight = "27px";

	msg.style.color = "#F71D1D";
}

function styleCircle(circle){
	circle.style.position = "absolute"
	circle.style.borderRadius = "50%";
	circle.style.background = "red";
	circle.style.height = "19px";
	circle.style.width = "19px";
	circle.style.marginLeft = "50px";
	circle.style.marginTop = "383px";

	circle.style.color = "white";
	circle.style.textAlign = "center"; 
}

//Get the value of email inserted of user
function sendDadas() {
    var emailUser = document.querySelector("input#email").value;
    
    //Validate user email
    function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);

	}
	if(validateEmail(emailUser) == false){

		//Change name
		var email = document.querySelector("p#email");
		email.style.color = "red";

		//Change color of border input 
		var box = document.querySelector("input#email");
		box.value = " ";
		box.style.border = "0.8px solid red";

		//Change position of send button
		var button = document.querySelector("button");
		button.style.marginTop = "13px";
		button.style.transitionDuration = "0.5s";

		//Show mensage 
		var msg = document.createElement("p"); 
		msg.innerHTML = "Please provide a valid e-mail."; 
		document.getElementById("from").appendChild(msg);
		styleMsg(msg);

		//Symbol
		var circle = document.createElement("div");
		document.getElementById("from").appendChild(circle);
		circle.innerHTML = "!";
		styleCircle(circle);
	}
}