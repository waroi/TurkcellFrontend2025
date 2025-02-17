document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const firstName = document.querySelector("input[placeholder='First name']").value.trim();
        const lastName = document.querySelector("input[placeholder='Last name']").value.trim();
        const email = document.querySelector("input[placeholder='E-mail']").value.trim();
        const subject = document.querySelector("input[placeholder='Subject']").value.trim();
        const message = document.querySelector("textarea").value.trim();
        
        if (!firstName || !lastName || !email || !subject || !message) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }
        
        const contactData = {
            firstName,
            lastName,
            email,
            subject,
            message,
            date: new Date().toLocaleString()
        };
        
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        
        contacts.push(contactData);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        
        alert("Mesajınız başarıyla kaydedildi!");
        
        form.reset();
    });
});
