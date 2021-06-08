import {Buttons} from './core/classes/Buttons.js';
window.addEventListener("DOMContentLoaded", function(){

    //get all buttons from page
    let buttons = document.querySelectorAll(".button");

    const btns = new Buttons(buttons);
    
    const allBtns = btns.getAllButtons();

    allBtns.forEach((btn) =>{
        console.log(btn);
    })


})


