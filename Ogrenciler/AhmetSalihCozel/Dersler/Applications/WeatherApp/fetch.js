let key = "4d8fb5b93d4af21d66a2948710284366"
let city = "Antalya"

export class Data {
    static async get(){
        await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=4d8fb5b93d4af21d66a2948710284366&q=Antalya`).then((response)=>{
            return response.json()
        }).then((data) =>{console.log(data)})
    }
}

//fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}`)



//https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=4d8fb5b93d4af21d66a2948710284366&q=Antalya