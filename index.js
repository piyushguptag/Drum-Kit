var allButton = document.querySelectorAll(".drum");
for( var i =0;i< allButton.length;i++){
    allButton[i].addEventListener("click", function (){
        var buttonContent = this.innerHTML;
        playMusic(buttonContent);
        animation(buttonContent);
    });
}

// Event listner for pressing keys 

document.addEventListener("keydown", function(event){
    playMusic(event.key);
    animation(event.key);
}); 

function playMusic(pressedKey){
    switch(pressedKey){
        case "w":
            var music1 = new Audio('sounds/tom-1.mp3');
            music1.play();
            break;
        case 'a':
            var music2 = new Audio('sounds/tom-2.mp3');
            music2.play();
            break;
        case 's':
            var music3 = new Audio('sounds/tom-3.mp3');
            music3.play();
            break;
        case 'd':
            var music4 = new Audio('sounds/tom-4.mp3');
            music4.play();
            break;
        case 'j':
            var music5 = new Audio('sounds/snare.mp3');
            music5.play();
            break;
        case 'k':
            var music6 = new Audio('sounds/crash.mp3');
            music6.play();
            break; 
        case 'l':
            var music7 = new Audio('sounds/kick-bass.mp3');
            music7.play();
            break;
        default:
            console.log(pressedKey);                     
    }
}
// Animation function

function animation(pressedKey){
    var buttonPressed=document.querySelector("."+pressedKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },200);
}