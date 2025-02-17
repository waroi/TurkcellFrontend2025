
// Filtreleme işlemi için gerekli olan fonksiyonlar burada yer almaktadır.
const filterSearch = document.querySelector("#search");

filterSearch.addEventListener("keyup", filter);

function filter(e) {
    const filtervalue = e.target.value.toLowerCase().trim();
    const oyunList = document.querySelectorAll(".card"); 

    if (oyunList.length > 0) {
        oyunList.forEach(card => {
            const gameTitle = card.querySelector(".card-title"); 
            if (gameTitle && gameTitle.textContent.toLowerCase().trim().includes(filtervalue)) {
                card.style.order=-1;
                card.style.display = "block"; 
                
            } else {
                card.style.order=1;
                card.style.display = "none"; 
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için eklenmiş oyun bulunmalıdır!");
    }
}


