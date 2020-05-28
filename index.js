                                                                                                          
// var n =document.querySelectorAll("button").length;
                                                                                                         
// for (i=0;i<n;i++){


// document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// }


// function handleClick() {
// //   alert("I am clicked");
// var pressMe = this.innerHTML;

// switch (pressMe) {
// case "w":
// var tom1 =new Audio ("sounds/tom-1.mp3");
// tom1.play();
// break;
// case "a":

// var tom2 = new Audio("sounds/tom-2.mp3");
// tom2.play();
// break;
// case "s":
// var tom3 = new Audio("sounds/tom-3.mp3");
// tom3.play();
// break;
// case "d":
// var tom4 = new Audio("sounds/tom-4.mp3");
// tom4.play();
// break;
// case "j":
// var crash1 = new Audio("sounds/crash.mp3");
// crash1.play();
// break;
// case "k":
// var kick1 = new Audio("sounds/kick-bass.mp3");
// kick1.play();
// break;
// case "l":
// var snare = new Audio("sounds/snare.mp3");
// snare.play();
// break;
// default:
// break;
// }
// }    
// ***************************************************************************************************  
var n =document.querySelectorAll("button").length;
                                                                                                         



// document.querySelectorAll("button")[i].addEventListener("click",function(){
// var buttonPress = this.innerHTML;
// makeNoise(buttonPress);

// });
// }
for (i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
var buttonPress = this.innerHTML;
makeNoise(buttonPress);
}
);
}




      
document.addEventListener("keypress",function(event){
makeNoise(event.key);

});

function makeNoise(key){


switch (key) {
  case "w":
  var tom1 =new Audio ("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "a":
  
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "j":
  var crash1 = new Audio("sounds/crash.mp3");
  crash1.play();
  break;
  case "k":
  var kick1 = new Audio("sounds/kick-bass.mp3");
  kick1.play();
  break;
  case "l":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;
  default:
  break;
  }
}