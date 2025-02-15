const loader = document.querySelector('.loader');

window.addEventListener("load", function() {
    setTimeout(() => {
        loader.style.backgroundColor = "#202124";
        loader.style.opacity = "0";
        loader.style.display = "none";
    }, 4000);
});