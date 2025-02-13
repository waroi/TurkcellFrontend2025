class HomeSection {
    constructor() {
        this.homeSection = document.createElement("section");
        this.homeSection.className = "home d-flex flex-wrap h-100";  

        this.leftSection = document.createElement("div");
        this.leftSection.className = "home-left position-relative col-12 col-lg-9"; 

        this.gradientBg = document.createElement("div");
        this.gradientBg.className = "gradient-bg position-absolute z-1 w-50 h-100 top-0 start-0";

        this.imgWrapper = document.createElement("div");
        this.imgWrapper.className = "home-img-wrapper position-absolute z-2 mt-5 start-0 bottom-0 col-6 object-fit-contain";
        this.img = document.createElement("img");
        this.img.src = "./assets/home-img.png";
        this.img.className = "home-img";
        this.imgWrapper.append(this.img);

        this.rightSection = document.createElement("div");
        this.rightSection.className = "home-right d-flex flex-column justify-content-center align-items-center p-4 col-12 col-lg-6"; 

        this.titleWrapper = document.createElement("div");
        this.titleWrapper.className = "home-title-wrapper mb-4 text-center text-white";
        this.title = document.createElement("h1");
        this.title.className = "home-title bold fs-128 text-primary";
        this.title.textContent = "Game'Z";
        this.titleWrapper.append(this.title);

        this.sloganBox = document.createElement("div");
        this.sloganBox.className = "slogan-box d-flex align-items-center justify-content-center p-5";

        this.slogan = document.createElement("p");
        this.slogan.className = "slogan-text text-white text-center bold fs-18";
        this.slogan.textContent = "Game'Z – Gerçek Oyuncuların Adresi";

        this.sloganBox.append(this.slogan);
        this.rightSection.append(this.titleWrapper, this.sloganBox);

        this.leftSection.append(this.gradientBg, this.imgWrapper);
        this.homeSection.append(this.leftSection, this.rightSection);

        document.querySelector("#home").append(this.homeSection);
    }
}

class AboutSection {
    constructor() {
        this.aboutSection = document.createElement("section");
        this.aboutSection.className = "about-us d-flex flex-wrap my-13"; 

        this.leftSection = document.createElement("div");
        this.leftSection.className = "about-left col-12 col-lg-4 position-relative"; 

        this.img = document.createElement("img");
        this.img.src = "./assets/about.png"; 
        this.img.className = "about-img w-100 h-100";
        this.leftSection.appendChild(this.img);

        this.rightSection = document.createElement("div");
        this.rightSection.className = "about-right col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center p-4"; 

        this.titleWrapper = document.createElement("div");
        this.titleWrapper.className = "about-title-wrapper mb-4";
        this.title = document.createElement("h2");
        this.title.className = "about-title fs-50 bold text-primary";
        this.title.textContent = "HAKKIMIZDA";
        this.titleWrapper.append(this.title);
        

        this.textList = document.createElement("ul");
        this.textList.className = "about-text-list list-unstyled text-white"; 

        const listItems = [
            "Game'Z, oyun dünyasındaki en güncel ve detaylı bilgileri sunan bir platformdur.",
            "Game'Z’de Neler Bulabilirsiniz?",
            "Oyunların çıkış tarihleri ve platform bilgileri.",
            "Kategorilerine göre ayrılmış aksiyon, strateji, RPG, spor ve daha fazlası.",
            "Eğer bir oyun hakkında bilgi arıyorsanız, Game'Z her zaman yanınızda."
        ];

        listItems.forEach(item => {
            const li = document.createElement("li");
            li.className = "about-text-item d-flex align-items-center mb-2";
            const point = document.createElement("span");
            point.className = "point rounded me-3";
            li.append(point, document.createTextNode(item));
            this.textList.appendChild(li);
        });

        this.rightSection.append(this.titleWrapper, this.textList);
        this.aboutSection.append(this.leftSection, this.rightSection);

        document.querySelector("#about-us").appendChild(this.aboutSection);
    }
}

class ContactSection {
    constructor() {
        this.contactSection = document.createElement("section");
        this.contactSection.className = "contact d-flex flex-wrap mt-13"; 

        this.leftSection = document.createElement("div");
        this.leftSection.className = "contact-left col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center p-5"; 

        this.gradientBg = document.createElement("div");
        this.gradientBg.className = "gradient-bg position-absolute z-1 w-100 h-100 top-0 start-0 "; 

        this.formWrapper = document.createElement("div");
        this.formWrapper.className = "form-wrapper d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded col-12 col-lg-6 z-2"; 

        this.formTitle = document.createElement("h2");
        this.formTitle.className = "form-title mb-4 text-purple";
        this.formTitle.textContent = "Bize Ulaşın";

        this.nameInput = this.createInput("Ad Soyad", "text");
        this.emailInput = this.createInput("E-mail", "email");
        this.messageInput = this.createTextarea("Mesaj");

        this.submitButton = document.createElement("button");
        this.submitButton.className = "btn btn-purple w-100 mt-4 text-white";
        this.submitButton.textContent = "Gönder";

        this.formWrapper.append(this.formTitle, this.nameInput, this.emailInput, this.messageInput, this.submitButton);

        this.rightSection = document.createElement("div");
        this.rightSection.className = "contact-right col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-4"; 

        this.rightTitle = document.createElement("h2");
        this.rightTitle.className = "right-title text-primary mb-4";
        this.rightTitle.textContent = "İLETİŞİM BİLGİLERİMİZ";

        this.list = document.createElement("ul");
        this.list.className = "contact-list list-unstyled text-white";

        const contactItems = [
            { icon: "fa-map-marker-alt", text: "Adres: Balıkesir" },
            { icon: "fa-phone", text: "Telefon: 123-456-7890" },
            { icon: "fa-envelope", text: "E-mail: contact@gamez.com" }
        ];

        contactItems.forEach(item => {
            const li = document.createElement("li");
            li.className = "contact-item d-flex align-items-center mb-3 position-relative"; 
            const point = document.createElement("span");
            point.className = "point rounded me-3 position-absolute"; 
            const icon = document.createElement("span");
            icon.className = `contact-icon me-3 fas z-2 p-1 ${item.icon}`;
            const text = document.createTextNode(item.text);
            li.append(point, icon, text);
            this.list.appendChild(li);
        }); 
        this.rightSection.append(this.rightTitle, this.list);

        this.leftSection.append(this.gradientBg, this.formWrapper);
        this.contactSection.append(this.leftSection, this.rightSection);

        document.querySelector("#contact").appendChild(this.contactSection);
    }
    createInput(placeholder, type) {
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "mb-3";
        const input = document.createElement("input");
        input.className = "form-control";
        input.type = type;
        input.placeholder = placeholder;
        inputWrapper.appendChild(input);
        return inputWrapper;
    }
    createTextarea(placeholder) {
        const textareaWrapper = document.createElement("div");
        textareaWrapper.className = "mb-3";
        const textarea = document.createElement("textarea");
        textarea.className = "form-control";
        textarea.placeholder = placeholder;
        textarea.rows = 5;
        textareaWrapper.appendChild(textarea);
        return textareaWrapper;
    }
}


