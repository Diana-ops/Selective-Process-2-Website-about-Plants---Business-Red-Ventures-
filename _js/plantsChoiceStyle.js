/*Style Name of Plant*/
function styleNamePlant(nameP){
	nameP.style.color = "#15573F";
	nameP.style.marginTop = "-142";
	nameP.style.marginLeft = "32";
	nameP.style.fontStyle = "normal";
	nameP.style.fontWeight = "bold";
	nameP.style.fontSize = "18px";
	nameP.style.lineHeight = "28px";
	nameP.style.fontWeight = "bold";
}

/*Style Price of Plant*/
function stylePricePlant(priceP){
	priceP.style.position = "absolute";
	priceP.style.height = "28px";
	priceP.style.marginLeft = "33";
	priceP.style.marginTop = "5";

	priceP.style.fontfamily = "Montserrat";
	priceP.style.fontStyle = "normal";
	priceP.style.fontWeight = "300";
	priceP.style.fontSize = "18px";
	priceP.style.lineHeight = "28px";

	priceP.style.color = "#6E6E6E";
}

/*Style Image of Plant*/
function styleImagePlant(image){
	image.height = "168";
	image.width = "174";

	image.style.position = "relative";
	image.style.left = "50";
	image.style.marginTop = "-220";
}

/*Style Image Sun*/
function styleImageSun(imageSun){
	imageSun.style.height = "23";
	imageSun.style.width = "23";

	imageSun.style.position = "absolute";
	imageSun.style.marginLeft = "10";
}

/*Style Image Water*/
function styleImageWater(imageWater){
	imageWater.style.height = "23";
	imageWater.style.width = "23";

	imageWater.style.position = "absolute";
	imageWater.style.marginLeft = "40";
}

function styleImagePet(imagePet){
	imagePet.style.height = "23";
	imagePet.style.width = "23";

	imagePet.style.position = "absolute";
	imagePet.style.marginLeft = "-20";	
}

/*Buy Now*/
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