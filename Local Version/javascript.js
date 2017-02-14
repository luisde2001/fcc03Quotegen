var quotes= [
"We all go a little mad sometimes, (pycho 1960)",
"Mrs. Robinson, you're trying to seduce me, aren't you?, (The Graduate 1967)",
"Open the pod bay doors, please, HAL, (2001 1968)",
"No, Mr. Bond. I expect you to die!, (Goldfinger 1964)",
"When the legend becomes fact, print the legend, (The Man Who Shot Liberty Valance 1962)",
"My name is Maximus Decimus Meridius, Commander of the armies of the North, General of the Felix legions, loyal servant to the true Emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next, (Gladiator 2000)"
];

function grabQuote(){ 
	var randomNumber = Math.floor(Math.random() * (quotes.length) );
	document.getElementById("quoteBox").innerHTML = quotes[randomNumber];
}

