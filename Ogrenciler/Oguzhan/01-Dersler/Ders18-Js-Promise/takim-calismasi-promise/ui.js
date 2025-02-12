class UI {

    static showPost() {
        const col = document.createElement("div")
        col.className = "col-lg-4 col-md-6 col-12"

        const cardDiv = document.createElement("div")
        cardDiv.className = "card"

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        const title = document.createElement("h5")
        title.className = "card-title"

        const subtitle = document.createElement("h5")
        subtitle.className = "card-subtitle"

        const cardText = document.createElement("p")
        cardText.className = "card-text"
    }
}