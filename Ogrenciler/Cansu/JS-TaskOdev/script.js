 tasklist = [
]
function add() {
    addedtask = prompt("Eklemek İstedğiniz Görev Nedir?")
    const newtask ={
        id:tasklist.length,
        task:addedtask 
        
    }
    tasklist.push(newtask)
    console.log("Görev Başarıyla Eklendi.")
    console.log(JSON.stringify(tasklist));


}
function remove() {
    removedtask = prompt("Silmek İstediğiniz Görev Nedir?")
   const newlist= tasklist.filter(t => t.id != removedtask)
   tasklist=newlist
    console.log("Görev Başarıyla Silindi.")
    console.log(JSON.stringify(tasklist));


}
function update() {
    selectedid = prompt("Güncellemek İstediğiniz Görevin id Nedir?")
    updatedtext = prompt("Güncellemek İstediğiniz Metin Nedir")
    const updatetask = tasklist.find(t => t.id == selectedid)
    updatetask.task = updatedtext
    console.log("Görev Başarıyla Güncellendi.")
    console.log(JSON.stringify(tasklist));



}
while (true) {
    selectedtask = prompt("Seçmek İstediğiniz Görev Nedir?")
    if (selectedtask === null) break;
    if (selectedtask == "1") {
        add()

    } else if (selectedtask == "2") {
        remove()


    }
    else if (selectedtask == "3") {
        update()


    }
    else {
        console.log("Hatalı Seçim Yaptınız.")
    }


}



