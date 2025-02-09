class Button {
    constructor(text, cssClass,) {
       
        this.button = document.createElement("button");
        textNode = document.createTextNode(text);
        this.button.appendChild(textNode);
        this.button.className = cssClass;

        if (text == "edit") {
            this.button.addEventListener("click", function(){
                console.log("Edit");
            } );
        }
        else if(text == "update"){
            this.button.addEventListener("click", function(){
                console.log("Update");
            } );
        }
        else{
            this.button.addEventListener("click", function(){
                console.log("Delete");
            } );
        }
    }
}