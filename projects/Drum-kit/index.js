function check(buttonclicked){
    buttonAnimation(buttonclicked);
    switch  (buttonclicked) {
        case "w":  var tom1 = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/tom-1.mp3"); 
                    tom1.play();
                    
                    break;
        case "a": var tom2 = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/tom-2.mp3"); 
                    tom2.play();
                    break;
        case "s": var tom3 = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/tom-3.mp3"); 
                    tom3.play();
                     break;
        case "d":  var tom4 = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/tom-4.mp3"); 
                    tom4.play();
                     break;

        case "j": var snare = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/snare.mp3"); 
                        snare.play();
                    break;
        case "k": var crash = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/crash.mp3"); 
                    crash.play();
                    break;

        case "l": var kick = new Audio("https://github.com/deadpool395/html-portfolio/raw/main/projects/Drum-kit/sounds/kick-bass.mp3"); 
                        kick.play();
                     break;

         default: console.log(buttonclicked);
    }
        
    }

for(var i = 0; i < (document.querySelectorAll(".drum").length); i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
        
    var buttonclicked = this.innerHTML;
    
    check(buttonclicked);
    } ); }

    document.addEventListener("keydown",function(KeyboardEvent){
        
        var keypressed = KeyboardEvent.key;
        buttonAnimation(keypressed);
        check(keypressed);
        
    })


function buttonAnimation(currentKey){

    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100   );
    
    

}
    









