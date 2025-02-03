let task = [];
let exit = "evet";
var gorev;
var silinecekGorev;


function listTasks(task) {
    if (task.length === 0) {
        return "Görev listeniz boş. Lütfen ilk önce bir görev ekleyiniz.\n";
    }
    else{
        let listedTasks = task
        .map((task, index) => {
            return `(${index + 1})-${task}\n`;
        })
        .join("");
    
    return listedTasks;
    }
}

while (exit === "evet") {
    let mainMenu = prompt(
        `Görevler => \n${listTasks(
            task
        )}\n(1) Görev Ekle:\n(2) Görev Sil:\n(3)Çıkış Yap`
    );

    switch (mainMenu) {
        case "1":
            gorev = prompt("Yapılacak Görevi Giriniz:");
            task.push(gorev);
            break;

        case "2":
            silinecekGorev = parseInt(
                prompt(`Silinecek görevi seçiniz:\n ${listTasks(task)}`)
            );
            task.splice(silinecekGorev, 1);
            console.log(task);
            break;

        case "3":
            exit = "hayır";
            continue;

        default:
            console.log("Lütfen geçerli bir seçenecek seçiniz!");
            break;
    }
    console.log(task);
}