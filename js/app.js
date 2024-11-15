document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    // Crear el header
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = "img/logo.jpg"; // Ruta de la imagen del logo
    logo.alt = "Azul Marino Viajes";
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const navItems = ["Inicio", "Nosotros", "Servicios", "Contacto"];
    
    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(nav);
    app.appendChild(header);

    // Crear la sección principal
    const mainSection = document.createElement("section");
    mainSection.id = "main";
    
    const mainImage = document.createElement("img");
    mainImage.src = "img/puerta.jpg";
    mainImage.alt = "Puerta de Brandeburgo";
    
    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    
    const textBoxTitle = document.createElement("h2");
    textBoxTitle.textContent = "Este es el titular del div de texto";
    
    const textBoxParagraph = document.createElement("p");
    textBoxParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisi sapien...";
    
    const button = document.createElement("button");
    button.textContent = "Ver más";
    button.addEventListener("click", () => alert("¡Hola! Gracias por visitar."));
    
    textBox.appendChild(textBoxTitle);
    textBox.appendChild(textBoxParagraph);
    textBox.appendChild(button);
    
    mainSection.appendChild(mainImage);
    mainSection.appendChild(textBox);
    app.appendChild(mainSection);

    // Crear la segunda sección
    const section2 = document.createElement("section");
    section2.id = "section2";
    
    const section2Title = document.createElement("h2");
    section2Title.textContent = "Este es el titular de la sección 2";
    
    const section2Image = document.createElement("img");
    section2Image.src = "img/foto5.jpg";
    section2Image.alt = "Montaña Nevada";
    
    section2.appendChild(section2Title);
    section2.appendChild(section2Image);
    app.appendChild(section2);

    // Crear la galería
    const gallerySection = document.createElement("section");
    gallerySection.id = "gallery";
    
    const galleryItems = [
        { src: "img/barco.jpg", alt: "Barco de pesca", text: "Lorem ipsum dolor sit amet" },
        { src: "img/kayak.jpg", alt: "Kayak por los rios", text: "Lorem ipsum dolor sit amet" },
        { src: "img/avion.jpg", alt: "Viajes de lujo", text: "Lorem ipsum dolor sit amet" },
    ];
    
    galleryItems.forEach(item => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        
        const p = document.createElement("p");
        p.textContent = item.text;
        
        div.appendChild(img);
        div.appendChild(p);
        gallerySection.appendChild(div);
    });
    
    app.appendChild(gallerySection);
});
