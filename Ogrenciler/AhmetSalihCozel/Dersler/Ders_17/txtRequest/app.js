document.getElementById("veri").addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(this.readyState);
        // if (this.readyState === 4 && this.status === 200){
        //     console.log(typeof this.responseText)
        // }
        xhr.onload = function () {
            if(this.status === 200){
                console.log(this.responseText)
            }
        }
    };
    xhr.open("GET","./text.txt",true)
    xhr.send();
})