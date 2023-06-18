    "use strict" // helps to prevent from accidentally creating global variables
    
    let playSound =(event) =>{
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

        if (!audio) return
        audio.currentTime = 0
        audio.play();
        key.classList.add('playing');
    }

    let removeTransition = function(event){
        (event.propertyName !== 'transform') ? '' : this.classList.remove('playing')
    }

    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown', playSound)
    
