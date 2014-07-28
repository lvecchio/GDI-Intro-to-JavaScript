var currentAge = 26;
//console.log("My current age is " + currentAge);

var maxAge = 120;
//console.log(maxAge);

var beers = 3;
//console.log(beers);

var days = (maxAge - currentAge) * 365;
//console.log(days);

var total = days * beers;
//console.log(total);

var result = "will need " + total + " beers to survive until you are " + maxAge + " years old.";


function sayHi(name) {

	alert("Hello " + name + ". You  " + result);

}

function sayBye(name) {

	alert("Bye " + name + ". You  " + result);

}



// if statement
if (currentAge !== maxAge ) {
	//console.log("Great, you don't drink alot");
} else {
	//console.log("Stop drinking!!!!!!");
}

// if statement (and/or)
/*if ((currentAge < maxAge) && (total < days)) {
	console.log('first');
} else if ((currentAge < maxAge) && (total < days)) {
	console.log('second one is true');
} else if ((currentAge < maxAge) && (total < days)) {
	console.log('third one is true');
} else {
	console.log('last');
}*/






function helloGoodbye() {
	sayHi("laura");
	sayBye("laura");
}

helloGoodbye();





























