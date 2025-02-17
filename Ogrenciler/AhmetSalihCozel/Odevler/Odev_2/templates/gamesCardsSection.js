import { card } from "./card.js";
import { Data } from "../services/data.js";
import { UI } from "../UI/UI.js";



export async function gamesCardSection(){
    let addGameBtn = document.getElementById("addGameBtn")
    addGameBtn.addEventListener("click",async ()=>{
        let obj = await new Data("http://localhost:3000/games/4a59").get()
        console.log(obj)
        new UI(obj).addCard()
    })

    new UI().search()

    let section = document.createElement("div")
    section.classList.add("cardSection")
    let container = document.createElement("div")
    container.classList.add("container")
    section.appendChild(container)
    let row = document.createElement("div")
    row.classList.add("row","cardRenderDiv")
    container.appendChild(row)
    let data = await new Data("http://localhost:3000/games").get()
    data.map((game)=>{
        row.appendChild(card(game))
    })
    return section
}