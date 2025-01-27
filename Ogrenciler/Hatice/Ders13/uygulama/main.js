alert("TaskManager' a Hoşgeldiniz")
const tasks = []; 
function addTask() {
    const name = prompt("Görevin adı nedir?");
    const content = prompt("Görevin içeriği nedir?");
    if (!name || !content) {
        console.log("Tüm alanlar doldurulmalıdır.");
        return;
    }
    const task = {
        id: tasks.length + 1,
        name: name,
        content: content,
        completed: false,
    };
    tasks.push(task);
    console.log(`Görev "${name}" başarıyla eklendi!`);
}
function listTasks() {
    if (tasks.length === 0) {
        console.log("Hiç görev bulunamadı.");
        return;
    }
    console.log("Görev Listesi:");
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log(`
            ID: ${task.id}
            Adı: ${task.name}
            İçerik: ${task.content}
        `);
    }
}
function updateTask() {
    const id = parseInt(prompt("Güncellemek istediğiniz görevin ID'sini girin:"), 10);
    if (isNaN(id)) {
        console.log("Geçerli bir ID girilmedi.");
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            const newName = prompt(`Yeni görev adı (${tasks[i].name}):`) || tasks[i].name;
            const newContent = prompt(`Yeni görev içeriği (${tasks[i].content}):`) || tasks[i].content;
            tasks[i].name = newName;
            tasks[i].content = newContent;
            console.log(`Görev "${tasks[i].name}" başarıyla güncellendi!`);
            return;
        }
    }
    console.log(`ID'si ${id} olan görev bulunamadı.`);
}
function removeTask() {
    const id = parseInt(prompt("Silmek istediğiniz görevin ID'sini girin:"), 10);
    if (isNaN(id)) {
        console.log("Geçerli bir ID girilmedi.");
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            const removedTask = tasks.splice(i, 1);
            console.log(`Görev "${removedTask[0].name}" silindi!`);
            return;
        }
    }
    console.log(`ID'si ${id} olan görev bulunamadı.`);
}
function taskManager() {
    let running = true;
    while (running) {
        console.log(`
Seçenekler:
1. Görev Ekle
2. Görevleri Listele
3. Görev Güncelle
4. Görev Sil
5. Çıkış
`);
        const choice = prompt("Bir seçenek girin (1-5):");
        if (choice === "1") {
            addTask();
        } else if (choice === "2") {
            listTasks();
        } else if (choice === "3") {
            updateTask();
        } else if (choice === "4") {
            removeTask();
        } else if (choice === "5") {
            console.log("TaskManager'dan ayrılıyorsunuz. Hoşça kalın!");
            running = false;
        } else {
            console.log("Geçersiz seçenek. Tekrar deneyin.");
        }
    }
}

taskManager();