let buttons = document.querySelectorAll(".drum");

function makeSound(key){
    switch(key){
            case "w" :
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a" :
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;   
            case "s" :
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break; 
            case "d" :
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break; 
            case "j" :
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break; 
            case "k" :
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break; 
            case "l" :
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;        
        }
}

function btnAnimation(key){
    let activeBtn = document.querySelector("."+key);
    activeBtn.classList.add('pressed')
    activeBtn.classList.add('white')

    setTimeout(function(){
        activeBtn.classList.remove('pressed')
        activeBtn.classList.remove('white')
    }, 100)
    
}   


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        this.style.color = "white";
        let btn = this.innerHTML;
        makeSound(btn)
        btnAnimation(btn)
    });
}

document.addEventListener("keypress", function(){
    let btn = event.key;
    makeSound(btn);
    btnAnimation(btn)
})

