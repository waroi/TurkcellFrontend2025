loremInput = document.getElementById("loremInput")
loremUl = document.getElementById("loremUl")
generateButton = document.getElementById("generateButton")


loremText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nobis qui eius aliquid laboriosam doloribus quia vel. Magnam blanditiis fugit, minus incidunt aperiam cum labore natus quaerat eveniet quam minima nesciunt voluptatibus dicta modi reiciendis. At laboriosam voluptatum sunt doloremque excepturi officiis ducimus non, obcaecati praesentium nemo accusamus libero delectus quae soluta ratione? In inventore ipsa non dignissimos delectus officia."

generateButton.addEventListener("click",()=>{
    number = Number(loremInput.value)
    console.log(typeof number)

    for(i=0; i<number ; i++){
        liElement = document.createElement("li")
        liElement.textContent = loremText
        liElement.className = "py-2"
        liElement.style.listStyle = "none"

        loremUl.appendChild(liElement)
    }
})