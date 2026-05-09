/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee;

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//retreive data from query string
if(urlParams.has("day")){
    myDay = urlParams.get("day");
}

myDay = parseInt(myDay);

switch(myDay){

    case 0:
   	    today = "Sunday";
        coffee = {
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A pic of a caramel latte coffee",
            color: "orange",
            day: "Sunday",
            desc: `I want some dark chocolate to go with my caramel latte!`
        };
 	break;

    case 1:
   	    today = "Monday";
        coffee = {
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A pic of a cold brew coffee",
            color: "black",
            day: "Monday",
            desc: `I need a cold brew to wake up from the weekend!`
        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A pic of a yummy bubble tea",
            color: "pink",
            day: "Tuesday",
            desc: `I like me some Bubble Tea!`
        };
 	break;

    case 3:
   	    today = "Wednesday";
        coffee = {
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A pic of a frappaccino coffee",
            color: "green",
            day: "Wednesday",
            desc: `I need a frappaccino coffee to wake me up and cool me down!`
        };
 	break;

    case 4:
   	    today = "Thursday";
        coffee = {
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A pic of a Mocha coffee",
            color: "red",
            day: "Thursday",
            desc: `I need a mocha, Can I get that with almond syrup?`
        };
 	break;

    case 5:
   	    today = "Friday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin spice latte",
            color: "blue",
            day: "Friday",
            desc: `I need a pumpkin spice latte can I have that with whip?`
        };
 	break;


    case 6:
   	    today = "Saturday";
        coffee = {
            name: "Drip",
            pic: "drip.jpg",
            alt: "A pic of a drip coffee",
            color: "brown",
            day: "Saturday",
            desc: `I need a constant drip!`
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

//alert(coffeeTemplate(coffee));

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
<p>
	<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
	<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
</p>

    `;

    return myReturn;
}

