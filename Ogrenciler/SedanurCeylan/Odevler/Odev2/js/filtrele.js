
// Filtreleme işlemi için gerekli olan fonksiyonlar burada yer almaktadır.
const filterSearch = document.querySelector("#search");

filterSearch.addEventListener("keyup", filter);

function filter(e) {
    const filtervalue = e.target.value.toLowerCase().trim();
    const oyunList = document.querySelectorAll(".card"); 

    if (oyunList.length > 0) {
        oyunList.forEach(card => {
            const gameTitle = card.querySelector(".card-title"); 
            if ((gameTitle && gameTitle.textContent.toLowerCase().trim().includes(filtervalue) )|| gameTitle.textContent==="") {

                card.parentElement.style.display = "block";
                
            } else {

                card.parentElement.style.display = "none"; 
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için eklenmiş oyun bulunmalıdır!");
    }
}


