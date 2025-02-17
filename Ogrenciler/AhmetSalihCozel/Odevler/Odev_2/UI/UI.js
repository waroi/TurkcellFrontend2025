class UI {
    constructor(gameObj){
        this.game = gameObj
    }
    addCard(){
        addModal();
        saveButton.style.display = "block"
    }
    infoCard(){
        infoModal(this.game);
        saveButton.classList.remove("d-flex")
        saveButton.style.remove("display")
        saveButton.style.display = "none"
    }
    editCard(){
        editModal(this.game);
        saveButton.classList.add("d-flex")
        saveButton.style.display = "none"
    }
    deleteCard(cardElement,gameObj) {
        deleteModal(gameObj,(isConfirmed)=>{
            if (isConfirmed){cardElement.remove()}
        })
        saveButton.classList.add("d-flex")
        saveButton.style.display = "none"
    }
    textOrInput(text){
        let input = document.createElement("input")
        input.classList.add("inputWhite")
        input.style.display = "none"
        text.addEventListener("click",()=>{
            text.style.display = "none"
            input.style.display = "block"
            input.value = text.textContent,
            input.focus()
        })
        input.addEventListener("blur", () => {
            text.style.display = "block";
            text.textContent = input.value;
            input.style.display = "none";
        });
        return input
    }

    search(){
        let searchButton = document.getElementById("searchBtn");
        let searchInput = document.getElementById("searchInput");
        
        searchButton.addEventListener("click", async () => {
            let games = await new Data("http://localhost:3000/games").get();
            console.log(games);
    
            games.forEach(async (game) => {
                let cardHtml = document.querySelector(`[item-id="${game.id}"]`);
                let searchValue = searchInput.value.replace(/\s+/g, "").toLowerCase();
                let found = false; // Arama sonucunu takip eden değişken
    
                for (const [key, value] of Object.entries(game)) {
                    let cardValue = String(value).replace(/\s+/g, "").toLowerCase();
    
                    if (cardValue.includes(searchValue)) {
                        found = true; 
                        break; 
                    }
                }
                cardHtml.classList.remove("cardCss");

                if (found === true) {
                    cardHtml.classList.add("d-flex")
                } else {
                    cardHtml.classList.remove("d-flex")
                    cardHtml.style.display = "none"
                }
            });
        });
    }
    
}