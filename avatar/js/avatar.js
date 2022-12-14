// JavaScript Document

//initalizing a varible - this varible is a OBJECT
//the properties will hold the filename of the
//image we are going to show
var character={face:"", headwear:"", body:"", dresses:"", boots:""};

var Name = document.getElementById('A Name').value;
console.log(Name);
//this function will set the body property

function setface(changling){
	
	character.face=changling;
	console.log(character.face);
	//run the body builder functions
	bodybuilder();
	
}

function setheadwear(changling){
	
	character.headwear=changling;
	console.log(character.headwear);
	//run the body builder functions
	bodybuilder();
	
}

function setBody(changling){
	
	character.body=changling;
	console.log(character.body);
	//run the body builder functions
	bodybuilder();
}

function setdresses(changling){
	
	character.dresses=changling;
	console.log(character.dresses);
	//run the body builder functions
	bodybuilder();
	
}

function setboots(changling){
	
	character.boots=changling;
	console.log(character.boots);
	//run the body builder functions
	bodybuilder();
}


//function place the images on the page
function bodybuilder(){
	
     if(character.face!=""){
		 document.getElementById('face').innerHTML="<img class='img-fluid' src='images/"+character.face+"' alt='face'>";
	 }
	
	   if(character.headwear!=""){
		 document.getElementById('headwear').innerHTML="<img class='img-fluid' src='images/"+character.headwear+"' alt='headwear'>";
	 }
	
	if(character.body!==""){
		document.getElementById('body').innerHTML="<img class='img-fluid' src='images/"+character.body+"' alt='body'>";
	}
	
	if(character.dresses!==""){
		document.getElementById('dresses').innerHTML="<img class='img-fluid' src='images/"+character.dresses+"' alt='dresses'>";
	}
	
	if(character.boots!==""){
		document.getElementById('boots').innerHTML="<img class='img-fluid' src='images/"+character.boots+"' alt='boots'>";
	}
	
}


