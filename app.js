const dice1 = 6;
const dice1 = 3;

if (dice1 === 6 && dice === 6) { // This is my "if" statement
    console.log("You rolled a double");
} else {
    console.log("You didn't");
}

{
let str = "This part of the message is hidden. You can see this part of the message because it didnt get sliced. This part of the message is also hidden "; // This is my string method
document.getElementById("method").innerHTML = str.slice(35,101); 
}

{
let day; // This is my switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("switch").innerHTML = "Today is " + day;
}

{
let x = 26; // this is my number
document.getElementById("number").innerHTML =
  x.toString() + "<br>" +
   (26).toString() + "<br>" +
   (16 + 10).toString();
}