
var positionTop = ["386", "-342", "-342", "53", "-342", "-342", "53", "-342", "-342"];
var positionLeft = ["288", "609", "930","288", "609", "930","288", "609", "930"];


for(var i = 0;  i < positionTop.length; i++){

	//Create a new div 
	var newSquare = document.createElement("div");

	//Defining a style of the element 
	newSquare.style.height = "342";
	newSquare.style.width = "268";


	newSquare.style.marginTop  = positionTop[i];
	newSquare.style.marginLeft = positionLeft[i];
	newSquare.style.backgroundColor = "white";
	//newSquare.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"; //Shadown (show when mouse over)

	document.getElementById("main").appendChild(newSquare);
}

var Cards = document.querySelectorAll("div#main div"); //Request all divs inside div#main 
//alert(Cards[0]);
for(var i = 0; i < positionTop.length; i++){

	//var captureCard = document.querySelector(Cards[i]);S

		Cards[i].onmouseover = function()
	{
		
		//Cards[i].style.backgroundColor = "red"; 
		//var card = document.querySelector("div#main " + Cards[i]);
		alert(i);
		
	}

	Cards[i].onmouseout = function()
	{
		Cards[i].style.backgroundColor = "white"; 
		
	}
}

