// ================================
// MENU MOBILE
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

elements.forEach(element => {

    observer.observe(element);

});


// ================================
// ANO AUTOMÁTICO
// ================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ================================
// FECHAR MENU AO REDIMENSIONAR
// ================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        nav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});