"use strict" // helps to prevent from accidentally creating global variables


const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes)


let lastChecked;


function handleCheck(e){
    //Check if they had the shift key down

    let inBetween = false;

    if(e.shiftKey && this.checked){

        checkboxes.forEach(checkbox =>{
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween

                console.log(inBetween)
            }

            if(inBetween){
                checkbox.checked = true;
            }
        })

    }
    lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
