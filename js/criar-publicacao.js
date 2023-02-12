//Pegando os elementos
const inputNomeDoPesquisador = window.document.querySelector("#input-nome-do-pesquisador");
const inputTituloDaPublicacao = window.document.querySelector("#input-titulo-da-publicacao");

const primeiroBotaoAvancar = window.document.querySelector(".primeiro-botao-avancar");
const primeiroSelect = window.document.getElementsByTagName("select")[0];

function getOpcaoSelecionada() {
    const opcaoSelecionada = primeiroSelect.options[primeiroSelect.selectedIndex].value;
    return opcaoSelecionada;
}

primeiroBotaoAvancar.addEventListener("click", ()=>{
    
    if(getOpcaoSelecionada() === "Trabalho Anual"){
        primeiroBotaoAvancar.setAttribute("href", "#passo-2-1");
        primeiroSelect.classList.remove('erro');
        return;
    }
    else if (getOpcaoSelecionada() === "Artigo Periódico"){
        primeiroBotaoAvancar.setAttribute("href", "#passo-2-2");
        primeiroSelect.classList.remove('erro');
        return;
    }
    else{
        primeiroSelect.style.borderColor = "#C21F30";
        window.alert("Selecione um dos tipos de publicações existentes.");
        return;
    }
})

