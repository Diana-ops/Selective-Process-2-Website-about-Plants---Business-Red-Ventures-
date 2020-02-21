
//When mouse over div with cards

//Select the Cards
var captureFCards = document.querySelector("div#firstChoice");
var captureSCards = document.querySelector("div#secondChoice");

//Pink Pictures 
const imgFirst = document.querySelector('img#firstChoice');
const imgSecond = document.querySelector('img#secondChoice');

//White Picture
const imgFirstH = document.querySelector('img#firstChoiceHider');
const imgSecondH = document.querySelector('img#secondChoiceHider');

//Hidden the pictures 
captureFCards.onmouseover = function(){
	imgFirst.style.display = 'none';
	imgFirstH.style.display = 'inline-block';
}

captureSCards.onmouseover = function(){
	imgSecond.style.display = 'none';
	imgSecondH.style.display = 'inline-block';
}


//Change the pictures 
captureFCards.onmouseout = function(){
	imgFirst.style.display = 'inline-block';
	imgFirstH.style.display = 'none';
}

captureSCards.onmouseout = function(){
	imgSecond.style.display = 'inline-block';
	imgSecondH.style.display = 'none';
}


//Change the page when the button pressed (Back to Home)
 
var capture = document.querySelector("button#buttonBack");
capture.onclick = function(){
	document.location.href = "water.html";
}

//Change the page when the button pressed (Go to Water)
 
var capture = document.querySelector("button#buttonNext");
capture.onclick = function(){
	document.location.href = "plantsChoice.html";
}
