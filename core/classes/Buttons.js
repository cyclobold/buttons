import { Button } from "./Button.js"
export class Buttons{

    buttons = [];
    btns = [];

    constructor(buttons){

        this.buttons = buttons;
        this.createBtnsInstance();
        
    }


    getAllButtons(){
        return this.btns;
    }


    createBtnsInstance(){
        this.buttons.forEach((btn) =>{
            let newBtn = new Button(btn);
            this.btns.push(newBtn);
        })
    }

}