/* I had changed keynames so variables and functions names might be a little bit confusing */

document.querySelector("button").addEventListener("click", gotClickeda );
document.querySelector(".s").addEventListener("click", gotClickeds );
document.querySelector(".d").addEventListener("click", gotClickedd );
document.querySelector(".f").addEventListener("click", gotClickedf );
document.querySelector(".j").addEventListener("click", gotClickedj );
document.querySelector(".k").addEventListener("click", gotClickedk );
document.querySelector(".l").addEventListener("click", gotClickedl );


function gotClickedl(){
    var sound= new Audio("sounds/tom-4.mp3");
    sound.play();
}
function gotClickeda(){
    this.style.colour="White";
    var sound= new Audio("sounds/tom-1.mp3")
    sound.play()
}
function gotClickeds(){
    var sound= new Audio("sounds/tom-2.mp3");
    sound.play();
}
function gotClickedd(){
    var sound= new Audio("sounds/tom-3.mp3");
    sound.play();
}
function gotClickedf(){
    var sound= new Audio("sounds/crash.mp3");
    sound.play();
}
function gotClickedj(){
    var sound= new Audio("sounds/mixkit-bass-guitar-single-note-2331.wav");
    sound.play();
}
function gotClickedk(){
    var sound= new Audio("sounds/snare.mp3");
    sound.play();
}
/*         keyboard sound from here         */
var v;
document.addEventListener ("keypress", function(evente){
    v=evente.key;
    playkey(v);
    animate(v);
})
function playkey(){
    switch (v) {
           case "a": var sound= new Audio("sounds/tom-1.mp3");
           sound.play();           
           break;
           
           case "s": var sound= new Audio("sounds/tom-2.mp3");
           sound.play();           
           break;
           
           case "d": var sound= new Audio("sounds/tom-3.mp3");
           sound.play();           
           break;
           
           case "f":  var sound= new Audio("sounds/crash.mp3");
           sound.play();           
           break;

           case "j":  var sound= new Audio("sounds/mixkit-bass-guitar-single-note-2331.wav");
           sound.play();           
           break;

           case "k":  var sound= new Audio("sounds/snare.mp3");
           sound.play();           
           break;
           
           case "l":  var sound= new Audio("sounds/tom-4.mp3");
           sound.play();           
           break;

           case " ":  var sound= new Audio("sounds/success-fanfare-trumpets-6185.mp3");
           sound.play();           
           break;

    
       default:var sound= new Audio("sounds/kick-bass.mp3");
       sound.play(); 
           break;
    }
}
var temp= "a";
function animate(v){

    document.querySelector("."+ temp).classList.remove("pressed"); 
document.querySelector("."+v).classList.add("pressed");
temp=v;
//Or use timeout function         setTimeout(function, 1000);    clearTimeout(function to stop timer)
}