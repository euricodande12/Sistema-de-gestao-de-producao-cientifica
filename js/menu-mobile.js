const botaoParaAbrirOMenu = window.document.querySelector(".botao-menu-icon-1");
const botaoParaFecharOMenu = window.document.querySelector(".botao-menu-icon-2");
const menuMobile = window.document.querySelector(".section-lista-de-links-mobile");

botaoParaAbrirOMenu.addEventListener("click", ()=>{
    menuMobile.classList.add("open");
    botaoParaAbrirOMenu.style.display = "none";
    botaoParaFecharOMenu.style.display = "initial";
});

botaoParaFecharOMenu.addEventListener("click", ()=>{
    menuMobile.classList.remove("open");
    botaoParaFecharOMenu.style.display = "none";
    botaoParaAbrirOMenu.style.display = "initial";
});