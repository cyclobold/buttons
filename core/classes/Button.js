export class Button{

    color = '';
    height = '';
    margin = '';
    border = '';
    innerText = '';
    buttonIcon = '';
    id = '';
    classes = [];
    isPressed = false;
    btn = '';

    constructor(btn){
        this.btn = btn;
       if(btn.id){
           this.id = btn.id;
       }

       if(btn.classList.length != 0){
           this.classes = btn.classList;
       }

       //Text
       if(btn.innerText){
           this.innerText = btn.innerText;
       }


       this.applyStylings();

    }



    applyStylings(){
        if(this.classes.length > 0){

            this.classes.forEach((cls) =>{
                if(cls == 'button-simple-loader'){
                    //apply the css..
                    this.btn.innerHTML = `${this.innerText} loading ...`;
                    
                }
            })

        }
    }

}